// @flow
import {connect} from 'react-redux'

// ACTIONS _____________________________________________________________________
import {
  setOnTop
} from '../ducks'

// COMPONENT ___________________________________________________________________
import App from './App'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps({onTop}) {
  return {
    onTop
  }
}

// DEFINE CONTAINER ____________________________________________________________
const AppContainer = connect(
  mapStateToProps, {
    setOnTop
  }
)(App)

export default AppContainer
