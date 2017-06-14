// @flow
import _ from 'ramda'
import {Reader} from 'monet'

// import type {
//   AppProps
// } from '../App/App'

import {
  isPositionAtTop,
  isPositionAtBottom
} from './helpers'

// TYPES _______________________________________________________________________
type ScrollObject = {
  position: string,
  direction: string
}

type WindowData = {
  currentTopPosition: number,
  currentBottomPosition: number,
  previousTopPosition: number
}

type PropsAndScroll = [
  typeof Reader,
  ScrollObject
]

type PropsScrollAndRedirect = [
  typeof Reader,
  ScrollObject,
  string
]

// GET POSITION ________________________________________________________________
/**
 * Checks the screen position and returns a string with the three possible values:
 * - `top`. If screen is on top.
 * - `middle`. If screen is neither on top nor on bottom.
 * - `bottom`. If the screen is at the bottom of the page.
 *
 * @param  {number} winTopPosition The top position of the window
 * @param  {number} winBottomPosition The bottom position of the window
 * @param  {number} docHeight Height of `document` in pixels
 * @return {string}                String that represents window position
 */
export const getScreenPosition = _.curry(
  (winTopPosition: number, winBottomPosition: number, docHeight: number): string =>
    isPositionAtTop(winTopPosition)
      ? 'top'
      : isPositionAtBottom(winBottomPosition, docHeight) ? 'bottom' : 'middle'
)

// GET SCROLL DIRECTION ________________________________________________________
/**
 * Checks which direction the scroll is happening, in this case scroll can be
 * either: `up` and `down`.
 *
 * @param  {number} currentWinTop The current top position from scroll event.
 * @param  {number} previousWinTop Top position stored in the state of the app.
 * @return {string}               String that represents the movement either up or down.
 */
export const getScrollDirection = _.curry(
  (currentWinTop: number, previousWinTop: number): string =>
    currentWinTop < previousWinTop ? 'up' : 'down'
)

// COLLECT DATA ________________________________________________________________
export const collectData = _.curry(
  (windowData: WindowData, docHeight: number, props: typeof Reader): PropsAndScroll  => {
    const {
      currentTopPosition,
      currentBottomPosition,
      previousTopPosition
    } = windowData

    return [props, {
      position: getScreenPosition(currentTopPosition, currentBottomPosition, docHeight),
      direction: getScrollDirection(currentTopPosition, previousTopPosition)
    }]
  }
)
