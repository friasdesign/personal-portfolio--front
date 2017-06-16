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

// COLLECT DATA ________________________________________________________________
export default _.curry(
  (operationType: [string, string], props: typeof Reader): PipedData  =>
    [operationType, props]
)
