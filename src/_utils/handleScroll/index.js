// @flow
import _ from 'ramda'

import type {
  AppProps
} from '../../App/App'

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
  getScreenBottom
} from '../helpers'

// TYPES _______________________________________________________________________
import type {
  PipedData
} from './_types'

// MODULES _____________________________________________________________________
import timerLogic from './timerLogic'
import collectData from './collectData'
import redirectToPage from './redirectToPage'
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

// EXPORT COMPOSED FUNCTION ____________________________________________________
export default function handleOnScroll(props: AppProps): void {
  // I can't export a single composed function, because this line ought to be
  // executed each time the scroll handle function is called.
  const currentTopPosition = windowGetScrollY.run()

  _.compose(
    callSideEffects(props),
    redirectToPage,
    triggerAnimation,
    timerLogic,
    setTopPosition(currentTopPosition),
    collectData({
      currentTopPosition,
      currentBottomPosition: getScreenBottom(currentTopPosition),
      previousTopPosition: props.lastTopPosition
    }, bodyGetHeight.run()),
    idReader
  )()
}
