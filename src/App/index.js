// @flow
import {connect} from 'react-redux'

// ACTIONS _____________________________________________________________________
import {
  setOnTop,
  setOnBottom,
  setScreenBottomPosition,
  setIdle
} from '../ducks'

// COMPONENT ___________________________________________________________________
import App from './App'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps({onTop, onBottom, idle}) {
  return {
    onTop,
    onBottom,
    idle
  }
}

// DEFINE CONTAINER ____________________________________________________________
const AppContainer = connect(
  mapStateToProps, {
    setOnTop,
    setOnBottom,
    setScreenBottomPosition,
    setIdle
  }
)(App)

export default AppContainer
