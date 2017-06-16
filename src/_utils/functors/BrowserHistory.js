// @flow
/*
This monad takes the `browserHistory` singleton from React Router and wraps it
for referential transparency.
 */
import {IO} from 'monet'
import {browserHistory} from 'react-router-dom'

const browserHistoryIO = IO(() => browserHistory)

export const browserHistoryPush = (location: string) =>
  browserHistoryIO.map((b) => b.push(location))
