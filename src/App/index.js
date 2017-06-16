// @flow
import {connect} from 'react-redux'

// ACTIONS _____________________________________________________________________
import {
  // setOnTop,
  // setOnBottom,
  // setScreenBottomPosition,
  setLastTopPosition,
  setIdle,
  setTimer
} from '../ducks'

// COMPONENT ___________________________________________________________________
import App from './App'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps({lastTopPosition, idle, timer}) {
  return {
    lastTopPosition,
    idle,
    timer
  }
}

// DEFINE CONTAINER ____________________________________________________________
const AppContainer = connect(
  mapStateToProps, {
    setLastTopPosition,
    setIdle,
    setTimer
  }
)(App)

export default AppContainer
