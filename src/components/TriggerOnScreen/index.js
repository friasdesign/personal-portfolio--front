// @flow
import {connect} from 'react-redux'

// TYPES _______________________________________________________________________
import type {Component} from 'react-flow-types'

// SELECTORS ___________________________________________________________________
import {
  getScreenBottomPosition
} from '../../ducks'

// COMPONENT ___________________________________________________________________
import TriggerOnScreen from './TriggerOnScreen'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps(state) {
  const {screenTopPosition} = state
  return {
    screenTopPosition,
    screenBottomPosition: getScreenBottomPosition(state)
  }
}

// DEFINE CONTAINER ____________________________________________________________
const TriggerOnScreenContainer = (child: Component<Object>) => {
  return connect(
    mapStateToProps,
  )(TriggerOnScreen(child))
}

export default TriggerOnScreenContainer
