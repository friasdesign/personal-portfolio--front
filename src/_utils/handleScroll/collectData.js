// @flow
import _ from 'ramda'
import {Reader} from 'monet'

// HELPERS _____________________________________________________________________
import {
  getScrollDirection,
  getScreenPosition
} from '../helpers'

// TYPES _______________________________________________________________________
import type {
  WindowData,
  PipedData
} from './_types'

// CONSTANTS ___________________________________________________________________
import {
  NORMAL_SCROLL,
  TRANSITION_SCROLL
} from './_constants'

// MAP POSITION AND DIRECTION TO OPERATION TYPE ________________________________
const mapPositionAndDirectionToOperation =
  (position: string, direction: string): [string, string] => {
    switch(position) {
      case 'top':
        return direction === 'up' ? [TRANSITION_SCROLL, 'up'] : [NORMAL_SCROLL, '']
      case 'bottom':
        return direction === 'down' ? [TRANSITION_SCROLL, 'down'] : [NORMAL_SCROLL, '']
      default:
        return [NORMAL_SCROLL, '']
    }
  }

// COLLECT DATA ________________________________________________________________
export default _.curry(
  (windowData: WindowData, docHeight: number, props: typeof Reader): PipedData  => {
    const {
      currentTopPosition,
      currentBottomPosition,
      previousTopPosition
    } = windowData
    const position = getScreenPosition(currentTopPosition, currentBottomPosition, docHeight)
    const direction = getScrollDirection(currentTopPosition, previousTopPosition)

    return [
      mapPositionAndDirectionToOperation(position, direction),
      props
    ]
  }
)
