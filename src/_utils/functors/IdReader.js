// @flow

import {Reader} from 'monet'

export default function idReader(): typeof Reader {
  return Reader(function identity<T>(id: T): T {
    return id
  })
}
