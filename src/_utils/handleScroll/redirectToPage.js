// @flow

// FUNCTORS ____________________________________________________________________
// import {browserHistoryPush} from '../functors/BrowserHistory'

// TYPES _______________________________________________________________________
import type {PipedData} from './_types'
import type {AppProps} from '../../App/App'

// CONSTANTS ___________________________________________________________________
import {TRANSITION_SCROLL} from './_constants'

export default (data: PipedData): PipedData => {
  const [type, props] = data

  switch(type[0]) {
    case TRANSITION_SCROLL:
      return [
        type,
        props.map((p: AppProps): AppProps => {
          switch(type[1]) {
            case 'up':
              p.history.push(p.previousPage)
              // browserHistoryPush(p.previousPage).run()
              return p
            case 'down':
              p.history.push(p.nextPage)
              // browserHistoryPush(p.nextPage).run()
              return p
            default:
              return p
          }
        })
      ]
    default:
      return data
  }
}
