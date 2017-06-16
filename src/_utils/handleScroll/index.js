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

import idReader from '../functors/IdReader'

// HELPER FUNCTIONS ____________________________________________________________
import {
  getScrollDirection
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

// MAP POSITION AND DIRECTION TO OPERATION TYPE ________________________________
const mapDataToOperation =
  (position: string, direction: string,
    inTransitionAnimation: [boolean, string],
    isLast: boolean,
    idle: boolean)
  : [string, string] => {
    if(inTransitionAnimation[0]) return [NORMAL_SCROLL, '']

    switch(direction) {
      case 'up':
        return (position === 'top') && idle
          ? [TRANSITION_SCROLL, 'up']
          : [NORMAL_SCROLL, '']
      case 'down':
        return (position === 'bottom') && idle && !isLast
          ? [TRANSITION_SCROLL, 'down']
          : [NORMAL_SCROLL, '']
      default:
        return [NORMAL_SCROLL, '']
    }
  }

const getScreenPosition = ({atBottom, atTop}: AppProps) =>
  atTop ? 'top' : atBottom ? 'bottom' : 'middle'

// EXPORT NORMAL SCROLL FLOW ___________________________________________________
export default function handleNormalScroll(props: AppProps, deltaY: number | boolean)
: void {
  // I can't export a single composed function, because this line ought to be
  // executed each time the scroll handle function is called.
  const currentTopPosition = windowGetScrollY.run()

  _.compose(
    callSideEffects(props),
    triggerAnimation,
    timerLogic,
    setTopPosition(currentTopPosition),
    collectData(
      mapDataToOperation(
        getScreenPosition(props),
        getScrollDirection(deltaY),
        props.inTransitionAnimation,
        props.isLast,
        props.idle)
    ),
    idReader
  )()
}
