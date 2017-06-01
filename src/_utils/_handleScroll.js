// @flow
import _ from 'ramda'
import {Reader} from 'monet'

import type {
  AppProps
} from '../App/App'

// HELPER LOGGER _______________________________________________________________
const log = _.curry((label, value) => {
  console.log(label, value)
  return value
})

const run = _.curry((monad, value) => monad.run(value))

// CONSTANTS ___________________________________________________________________
const checkIfiOS = _.curry((win: {MSStream: any}, nav: {userAgent: string}) => {
  return /iPad|iPhone|iPod/.test(nav.userAgent) && !win.MSStream
})

export const _INNER_HEIGHT = checkIfiOS(window, navigator)
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
const checkIfOnTop = _.curry((props: AppProps, position: number) => {
  if(position <= 50) props.setOnTop(true)
  else if(props.onTop) props.setOnTop(false)
  return position
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
const checkIfOnBottom = _.curry((props: AppProps, docHeight: number, position: number) => {
  if(getScreenBottom(position) >= (docHeight - 50)) props.setOnBottom(true)
  else if(props.onBottom) props.setOnBottom(false)
  return position
})

const setScreenBottomPosition = _.curry((props: AppProps, position: number) => {
  props.setScreenBottomPosition(getScreenBottom(position))
  return position
})

// SMALL GETTERS _______________________________________________________________
export function getScreenBottom(position: number) {
  return position + _INNER_HEIGHT
}

const getScrollY = _.compose(
  _.map(_.prop('scrollY')),
  idReader
)

function getBodyHeight() {
  const {body} = document
  return body ? body.clientHeight : 150
}

// MONADS ______________________________________________________________________
function idReader() {
  return Reader(id => id)
}

// HANDLE SCROLL COMPOSED FUNCTION _____________________________________________
export default _.curry((props: AppProps, window: {scrollY: number}) =>
  _.compose(
    checkIfOnBottom(props, getBodyHeight()),
    checkIfOnTop(props),
    setScreenBottomPosition(props),
    run(getScrollY())
  )(window)
)
