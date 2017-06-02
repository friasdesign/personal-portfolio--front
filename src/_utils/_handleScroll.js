// @flow
import _ from 'ramda'
import {Reader, IO, Maybe} from 'monet'

import type {
  AppProps
} from '../App/App'

// CONSTANTS ___________________________________________________________________
const checkIfiOS = _.curry((win: {MSStream: any}, nav: {userAgent: string}) => {
  return /iPad|iPhone|iPod/.test(nav.userAgent) && !win.MSStream
})

const callScreenBottomPosition = _.curry((x, id) => {
  id.setScreenBottomPosition(x)
})

// MONADS ______________________________________________________________________
const IOWindow = IO(() => window)
export const windowGetScrollY = IOWindow.map(_.prop('scrollY'))
const windowGetInnerHeight = IOWindow.map(_.prop('_INNER_HEIGHT'))

/**
 * IO monad that returns `document.body` as Maybe.
 */
const IOBody = IO(() => Maybe.fromNull(document.body))
  .map(b => b.orSome(false))
  .map(b => b ? b : 150)

const getBodyHeight = IOBody.map(_.prop('clientHeight'))

/**
 * Monkey patch to support consistent behavior on iOS regarding innerHeight
 * @type {number}
 */
window._INNER_HEIGHT = checkIfiOS(window, navigator)
  ? screen.height
  : window.innerHeight

/**
 * Curried function that checks if application is currently on top of the
 * document. It's done by checking the actual position passed as second argument.
 *
 * The first argument holds reference to the props of the component.
 * In this application they are tied to `App` component, this allows this
 * abstraction function to call dispatch functions as corresponds.
 *
 * This is by NO means a pure function, since it has side-effects. Instead, it
 * takes advantage of currying to reduce complexity and make it easier to reason
 * about.
 *
 * @param {AppProps} props Props of a React Component
 * @param {number} position The current `window.scrollY` position
 * @return {number} The current `window.scrollY` position
 */
const checkIfOnTop = _.curry((position: number, props: AppProps) => {
  if(position <= 50) props.setOnTop(true)
  else if(props.onTop) props.setOnTop(false)
  return props
})

/**
 * Curried function similar to `checkIfOnTop` but it checks whether the appplication
 * has been scrolled to the bottom of the body.
 *
 * @param {AppProps} props Props of a React Component
 * @param {number} docHeight current height of document.body
 * @param {number} position The current `window.scrollY` position
 * @return {number} The current `window.scrollY` position
 */
const checkIfOnBottom = _.curry((position: number, docHeight: number, props: AppProps) => {
  if(getScreenBottom(position) >= (docHeight - 50)) props.setOnBottom(true)
  else if(props.onBottom) props.setOnBottom(false)
  return props
})

const setScreenBottomPosition = _.curry((position: number, props: AppProps) => {
  idReader().map(callScreenBottomPosition(getScreenBottom(position))).run(props)
  return props
})

// SMALL GETTERS _______________________________________________________________
export function getScreenBottom(position: number) {
  return position + windowGetInnerHeight.run()
}

// MONADS ______________________________________________________________________
function idReader() {
  return Reader(id => id)
}

// STATE MANAGEMENT ____________________________________________________________
const updateState = (winPosition: number) => {
  return idReader()
    .map(setScreenBottomPosition(winPosition))
    .map(checkIfOnTop(winPosition))
    .map(checkIfOnBottom(winPosition, getBodyHeight.run()))
}


// HANDLE SCROLL FUNCTION ______________________________________________________
export default function handleOnScroll(props: AppProps) {
  updateState(windowGetScrollY.run()).run(props)
}
