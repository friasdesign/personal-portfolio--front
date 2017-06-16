// @flow
import _ from 'ramda'

// TYPES _______________________________________________________________________
import type {AppProps} from '../../App/App'
import type {PipedData} from './_types'

export default _.curry(
  (newValue: number, data: PipedData): PipedData => {
    const [type, props] = data

    return [type, props.map((p: AppProps): AppProps => {
      p.setScreenTopPosition(newValue)
      return p
    })]
})
