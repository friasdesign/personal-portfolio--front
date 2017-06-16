// @flow
import _ from 'ramda'
import {Reader} from 'monet'

// TYPES _______________________________________________________________________
import type {
  PipedData
} from './_types'

// COLLECT DATA ________________________________________________________________
export default _.curry(
  (operationType: [string, string], props: typeof Reader): PipedData  =>
    [operationType, props]
)
