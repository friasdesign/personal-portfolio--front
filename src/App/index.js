// @flow
import {connect} from 'react-redux'

// ACTIONS _____________________________________________________________________
import {
  setOnTop,
  setOnBottom,
  setScreenBottomPosition,
  setIdle,
  setTimer
} from '../ducks'

// COMPONENT ___________________________________________________________________
import App from './App'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps({onTop, onBottom, idle, timer}) {
  return {
    onTop,
    onBottom,
    idle,
    timer
  }
}

// DEFINE CONTAINER ____________________________________________________________
const AppContainer = connect(
  mapStateToProps, {
    setOnTop,
    setOnBottom,
    setScreenBottomPosition,
    setIdle,
    setTimer
  }
)(App)

export default AppContainer
