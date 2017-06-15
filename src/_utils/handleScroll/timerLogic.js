// @flow

// FUNCTORS ____________________________________________________________________
import {
  windowClearInterval,
  windowSetTimeout
} from '../functors/Window'

// TYPES _______________________________________________________________________
import type {
  PipedData,
} from './_types'

import type {
  AppProps
} from '../../App/App'

// CONSTANTS ___________________________________________________________________
import {
  NORMAL_SCROLL,
  TRANSITION_SCROLL
} from './_constants'

const killTimer = (props: AppProps): AppProps => {
  const {timer} = props
  windowClearInterval(timer).run()
  return props
}

/**
 * Call dispatch function to set application's state `idle` to `false`, only
 * if it's currently set to `true`.
 * @param {AppProps} props Props of App React Component
 * @return {AppProps}
 */
const setIdleToFalse = (props: AppProps): AppProps => {
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
const setIdleTimer = (props: AppProps): AppProps => {
  const {timer} = props

  if(timer !== -1) windowClearInterval(timer).run()

  const id = windowSetTimeout(() => {
    props.setIdle(true)
    props.setTimer(-1)
  }, 1000).run()

  props.setTimer(id)

  return props
}

export default (data: PipedData): PipedData => {
  const [type, props] = data

  switch(type[0]) {
    case NORMAL_SCROLL:
      props.map(setIdleToFalse)
      props.map(setIdleTimer)
      return [type, props]
    case TRANSITION_SCROLL:
      props.map(killTimer)
      return [type, props]
    default:
      return data
  }
}
