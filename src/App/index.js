// @flow
import {connect} from 'react-redux'

// ACTIONS _____________________________________________________________________
import {
  // setOnTop,
  // setOnBottom,
  // setScreenBottomPosition,
  setScreenTopPosition,
  setIdle,
  setTimer
} from '../ducks'

// COMPONENT ___________________________________________________________________
import App from './App'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps({screenTopPosition, idle, timer}) {
  return {
    screenTopPosition,
    idle,
    timer
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
