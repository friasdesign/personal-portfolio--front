// @flow
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

// ACTION CREATORS _____________________________________________________________
import {
  setMenuOpen,
  setAtHome
} from '../../ducks'

// COMPONENT ___________________________________________________________________
import ResetOnPageChange from './ResetOnPageChange'

// DEFINE CONTAINER ____________________________________________________________
const ResetOnPageChangeContainer = connect(
  null, {
    setMenuOpen,
    setAtHome
  }
)(ResetOnPageChange)

export default withRouter(ResetOnPageChangeContainer)
