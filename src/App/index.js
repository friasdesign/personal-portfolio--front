// @flow
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

// ACTIONS _____________________________________________________________________
import {
  setScreenTopPosition,
  setIdle,
  setTimer,
  triggerTransitionAnimation,
  endTransitionAnimation,
  getAtTop,
  getAtBottom
} from '../ducks'

// COMPONENT ___________________________________________________________________
import App from './App'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps(state: Object) {
  const {
    setScreenTopPosition,
    inTransitionAnimation,
    idle,
    isLast,
    timer,
    nextPage,
    previousPage,
    atHome
  } = state
  return {
    setScreenTopPosition,
    idle,
    inTransitionAnimation,
    timer,
    isLast,
    atTop: getAtTop(state),
    atBottom: getAtBottom(state),
    nextPage,
    previousPage,
    atHome
  }
}

// DEFINE CONTAINER ____________________________________________________________
const AppContainer = connect(
  mapStateToProps, {
    setScreenTopPosition,
    triggerTransitionAnimation,
    endTransitionAnimation,
    setIdle,
    setTimer
  }
)(App)

export default withRouter(AppContainer)
