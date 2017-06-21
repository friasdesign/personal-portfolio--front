// @flow
import _ from 'ramda'

// TYPES _______________________________________________________________________
import type {AppProps} from '../../App/App'
import type {PipedData} from './_types'

// CONSTANTS ___________________________________________________________________
import {
  NORMAL_SCROLL,
  TRANSITION_SCROLL
} from './_constants'

export default _.curry(
  (newValue: number, data: PipedData): PipedData => {
    const [type, props] = data

    switch(type[0]) {
      case NORMAL_SCROLL:
        return [type, props.map((p: AppProps): AppProps => {
          p.setScreenTopPosition(newValue)
          return p
        })]
      case TRANSITION_SCROLL:
        return [type, props.map((p: AppProps): AppProps => {
          p.setScreenTopPosition(0)
          return p
        })]
      default:
        return data
    }
})
