// @flow

// TYPES _______________________________________________________________________
import type {AppProps} from '../../App/App'
import type {PipedData} from './_types'

// CONSTANTS ___________________________________________________________________
import {TRANSITION_SCROLL} from './_constants'

export default (data: PipedData): PipedData => {
  const [type, props] = data

  switch(type[0]) {
    case TRANSITION_SCROLL:
      props.map((p: AppProps): AppProps => {
        p.triggerTransitionAnimation(type[1])
        return p
      })
      return [
        type,
        props.map((p: AppProps): AppProps => {
          p.triggerTransitionAnimation(type[1])
          return p
        })
      ]
    default:
      return data
  }
}
