// @flow
import {connect} from 'react-redux'

// COMPONENT ___________________________________________________________________
import TriggerOnScreen from './TriggerOnScreen'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps({onTop, onBottom}) {
  return {
    onTop,
    onBottom
  }
}

// DEFINE CONTAINER ____________________________________________________________
const TriggerOnScreenContainer = (child) => {
  return connect(
    mapStateToProps,
  )(TriggerOnScreen(child))
}

export default TriggerOnScreenContainer
