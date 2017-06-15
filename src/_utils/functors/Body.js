import _ from 'ramda'
import {IO, Maybe} from 'monet'

/**
 * IO monad that returns `document.body` as Maybe.
 */
const IOBody = IO(() => Maybe.fromNull(document.body))
  .map(b => b.orSome(false))
  .map(b => b ? b : 150)

export const bodyGetHeight = IOBody.map(_.prop('clientHeight'))
