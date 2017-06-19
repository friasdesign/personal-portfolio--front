// @flow
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

// SELECTORS ___________________________________________________________________
import {
  setMenuOpen
} from '../../ducks'

// COMPONENT ___________________________________________________________________
import ResetOnPageChange from './ResetOnPageChange'

// DEFINE CONTAINER ____________________________________________________________
const ResetOnPageChangeContainer = connect(
  null, {
    setMenuOpen
  }
)(ResetOnPageChange)

export default withRouter(ResetOnPageChangeContainer)
