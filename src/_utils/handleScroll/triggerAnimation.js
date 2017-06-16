// @flow

// TYPES _______________________________________________________________________
import type {AppProps} from '../../App/App'
import type {PipedData} from './_types'

// FUNCTORS ____________________________________________________________________
import {windowSetTimeout} from '../functors/Window'

// CONSTANTS ___________________________________________________________________
import {TRANSITION_SCROLL} from './_constants'

function redirectToPage(type: string, p: AppProps) {
  return () => {
    switch(type) {
      case 'up':
      console.log('previous page', p.previousPage)
        p.history.push(p.previousPage)
        p.endTransitionAnimation()
        return true
      case 'down':
        p.history.push(p.nextPage)
        p.endTransitionAnimation()
        return true
      default:
        return false
    }
  }
}

export default (data: PipedData): PipedData => {
  const [type, props] = data

  switch(type[0]) {
    case TRANSITION_SCROLL:
      return [
        type,
        props.map((p: AppProps): AppProps => {
          p.triggerTransitionAnimation(type[1])
          windowSetTimeout(redirectToPage(type[1], p), 1000).run()
          return p
        })
      ]
    default:
      return data
  }
}
