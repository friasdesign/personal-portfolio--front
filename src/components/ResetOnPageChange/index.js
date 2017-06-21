// @flow
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

// ACTION CREATORS _____________________________________________________________
import {
  resetOnPageChange,
  setAtHome
} from '../../ducks'

// COMPONENT ___________________________________________________________________
import ResetOnPageChange from './ResetOnPageChange'

// DEFINE CONTAINER ____________________________________________________________
const ResetOnPageChangeContainer = connect(
  null, {
    resetOnPageChange,
    setAtHome
  }
)(ResetOnPageChange)

export default withRouter(ResetOnPageChangeContainer)
