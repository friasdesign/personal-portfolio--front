/*
This monad takes the `browserHistory` singleton from React Router and wraps it
for referential transparency.
 */
import {IO} from 'monet'
import {browserHistory} from 'react-router'

export default IO(() => browserHistory)
