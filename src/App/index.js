// @flow
import {connect} from 'react-redux'

// ACTIONS _____________________________________________________________________
import {
  setOnTop,
  setOnBottom
} from '../ducks'

// COMPONENT ___________________________________________________________________
import App from './App'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps({onTop, onBottom}) {
  return {
    onTop,
    onBottom
  }
}

// DEFINE CONTAINER ____________________________________________________________
const AppContainer = connect(
  mapStateToProps, {
    setOnTop,
    setOnBottom
  }
)(App)

export default AppContainer
