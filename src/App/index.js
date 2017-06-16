// @flow
import {connect} from 'react-redux'

// ACTIONS _____________________________________________________________________
import {
  setScreenTopPosition,
  setIdle,
  setTimer
} from '../ducks'

// COMPONENT ___________________________________________________________________
import App from './App'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps({setScreenTopPosition, idle, timer, atBottom, atTop}) {
  return {
    setScreenTopPosition,
    idle,
    timer,
    atBottom,
    atTop
  }
}

// DEFINE CONTAINER ____________________________________________________________
const AppContainer = connect(
  mapStateToProps, {
    setScreenTopPosition,
    setIdle,
    setTimer
  }
)(App)

export default AppContainer
