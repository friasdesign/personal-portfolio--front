// @flow
import {connect} from 'react-redux'

// TYPES _______________________________________________________________________
import type {Component} from 'react-flow-types'

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
const TriggerOnScreenContainer = (child: Component<Object>) => {
  return connect(
    mapStateToProps,
  )(TriggerOnScreen(child))
}

export default TriggerOnScreenContainer
