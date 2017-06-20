// @flow
import _ from 'ramda'

import type {
  AppProps
} from '../../App/App'

import {
  NORMAL_SCROLL,
  TRANSITION_SCROLL
} from './_constants'

// FUNCTORS ____________________________________________________________________
import {
  windowGetScrollY
} from '../functors/Window'

import {
  bodyGetHeight
} from '../functors/Body'

import idReader from '../functors/IdReader'

// HELPER FUNCTIONS ____________________________________________________________
import {
  getScrollDirection,
  getScreenPosition,
  getScreenBottom,
  log
} from '../helpers'

// TYPES _______________________________________________________________________
import type {
  PipedData
} from './_types'

// MODULES _____________________________________________________________________
import timerLogic from './timerLogic'
import collectData from './collectData'
import setTopPosition from './setTopPosition'
import triggerAnimation from './triggerAnimation'

// SIDE EFFECTS ________________________________________________________________
/**
 * This is the function that calls all side effects by invoking `run` function
 * over the Reader passed as second element of the tuple of type PipedData.
 *
 * @param {AppProps} props Props of React Component App
 * @param {PipedData} data Data that has been piped through the composed function `handleOnScroll`.
 */
const callSideEffects = _.curry(
  (props: AppProps, data: PipedData): void => {
    data[1].run(props)
  }
)

const TRANSITION_UP_TUPLE = [TRANSITION_SCROLL, 'up']
const TRANSITION_DOWN_TUPLE = [TRANSITION_SCROLL, 'down']
const NORMAL_SCROLL_TUPLE = [NORMAL_SCROLL, '']
const NO_SCROLL_TUPLE = ['noScroll', '']

// MAP POSITION AND DIRECTION TO OPERATION TYPE ________________________________
const mapDataToOperation =
  (position: string, direction: string,
    inTransitionAnimation: [boolean, string],
    isLast: boolean,
    idle: boolean,
    atHome: boolean)
  : [string, string] => {
    if(inTransitionAnimation[0]) return NO_SCROLL_TUPLE
    if(atHome)
      return direction === 'down' || position === 'beyondBottom'
        ? TRANSITION_DOWN_TUPLE
        : NO_SCROLL_TUPLE

    switch(position) {
      case 'beyondTop':
        return idle
          ? TRANSITION_UP_TUPLE
          : NORMAL_SCROLL_TUPLE
      case 'top':
        return (direction === 'up') && idle
          ? TRANSITION_UP_TUPLE
          : NORMAL_SCROLL_TUPLE
      case 'bottom':
        return (direction === 'down') && idle && !isLast
          ? TRANSITION_DOWN_TUPLE
          : NORMAL_SCROLL_TUPLE
      case 'beyondBottom':
        return idle && !isLast
          ? TRANSITION_DOWN_TUPLE
          : NORMAL_SCROLL_TUPLE
      default:
        return NORMAL_SCROLL_TUPLE
    }
  }

// EXPORT NORMAL SCROLL FLOW ___________________________________________________
export default function handleNormalScroll(props: AppProps, deltaY: number | boolean)
: void {
  // I can't export a single composed function, because this line ought to be
  // executed each time the scroll handle function is called.
  const currentTopPosition = windowGetScrollY.run()
  const bodyHeight = bodyGetHeight.run()

  _.compose(
    callSideEffects(props),
    triggerAnimation,
    timerLogic,
    setTopPosition(currentTopPosition),
    log('piped data:'),
    collectData(
      mapDataToOperation(
        getScreenPosition(
          currentTopPosition,
          getScreenBottom(currentTopPosition),
          bodyHeight
        ),
        getScrollDirection(deltaY),
        props.inTransitionAnimation,
        props.isLast,
        props.idle,
        props.atHome)
    ),
    idReader
  )()
}
