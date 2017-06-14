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
const windowSetTimeout = (cb, time) => IOWindow.map((w) => w.setTimeout(cb, time))

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
 * @return {AppProps}       Props of App React Component
 */
const checkIfOnBottom = _.curry((position: number, docHeight: number, props: AppProps) => {
  if(getScreenBottom(position) >= (docHeight - 70)) props.setOnBottom(true)
  else if(props.onBottom) props.setOnBottom(false)
  return props
})

const setScreenBottomPosition = _.curry((position: number, props: AppProps) => {
  idReader().map(callScreenBottomPosition(getScreenBottom(position))).run(props)
  return props
})

// IDLE ________________________________________________________________________
/**
 * Call dispatch function to set application's state `idle` to `false`, only
 * if it's currently set to `true`.
 * @param {AppProps} props Props of App React Component
 * @return {AppProps}
 */
const setIdleToFalse = (props: AppProps) => {
  if(props.idle) props.setIdle(false)
  return props
}

/**
 * Checks whether a timer has already been placed to track the idle state of the
 * user, if so, then each time user scrolls during timeout it resets the timer.
 * If user keeps idle until the end of timer, then state's `idle` is set to `true`.
 * @param {AppProps} props Props of App React Component
 * @return {AppProps}       Props of App React Component
 */
const setIdleTimer = (props: AppProps) => {
  const {timer} = props

  if(timer !== -1) clearInterval(timer)

  const id = windowSetTimeout(() => {
    props.setIdle(true)
    props.setTimer(-1)
  }, 1000).run()

  props.setTimer(id)

  return props
}

// SMALL GETTERS _______________________________________________________________
export function getScreenBottom(position: number) {
  return position + windowGetInnerHeight.run()
}

// MONADS ______________________________________________________________________
function idReader() {
  return Reader(id => id)
}

// NORMAL SCROLL ____________________________________________________________
const normalScroll = (winPosition: number) => {
  return idReader()
    .map(setScreenBottomPosition(winPosition))
    .map(checkIfOnTop(winPosition))
    .map(checkIfOnBottom(winPosition, getBodyHeight.run()))
    .map(setIdleTimer)
    .map(setIdleToFalse)
}

// SCROLL TO NEXT PAGE _________________________________________________________
// const scrollToNextPage = (winPosition: number) =>
//   _.compose(
//     checkI
//     determineScrollDirection
//   )

// HANDLE SCROLL FUNCTION ______________________________________________________
/**
 * Function that handles logic related to scroll in the application.
 * This exposes a minimal API to module that imports this function.
 * This function doesn't get composed or anything like that because
 * `windowGetScrollY` should be evaluated each time the function gets executed,
 * thus it can't get hardcoded by composing or currying the function.
 *
 * @param  {Object} props App component's props
 */
export default function handleOnScroll(props: AppProps) {
  normalScroll(windowGetScrollY.run()).run(props)
}
