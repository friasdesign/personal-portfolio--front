import _ from 'ramda'

// IMPORT FUNCTORS _____________________________________________________________
import {
  windowGetInnerHeight
} from './functors/Window'

export const run = _.curry((monad, value) => monad.run(value))

export const log = _.curry((label, value) => {
  console.log(label, value)
  return value
})

export const checkIfiOS = _.curry((win: {MSStream: any}, nav: {userAgent: string}) => {
  return /iPad|iPhone|iPod/.test(nav.userAgent) && !win.MSStream
})

// isPositionOnTop :: number a -> boolean b
export const isPositionAtTop = (winTopPosition: number): boolean => winTopPosition <= 50

// isPositionOnBottom :: number a -> number b -> boolean c
export const isPositionAtBottom = _.curry(
  (winBottomPosition: number, docHeight: number): boolean =>
    winBottomPosition >= (docHeight - 70)
)

// isPositionInMiddle :: number a -> number b -> number c -> boolean d
export const isPositionInMiddle = _.curry(
  (winTopPosition: number, winBottomPosition: number, docHeight: number): boolean =>
    !(isPositionAtTop(winTopPosition) ||
      isPositionAtBottom(winBottomPosition, docHeight)
    )
)

// SMALL GETTERS _______________________________________________________________
export function getScreenBottom(position: number) {
  const windowHeight = windowGetInnerHeight.run()

  return position + windowHeight
}

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
