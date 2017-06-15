// @flow
import {connect} from 'react-redux'

// SELECTORS ___________________________________________________________________
import {
  getAtTop,
  getAtBottom
} from '../../ducks'

// COMPONENT ___________________________________________________________________
import NavArrow from './NavArrow'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps(state) {
  return {
    atTop: getAtTop(state),
    atBottom: getAtBottom(state)
  }
}

// DEFINE CONTAINER ____________________________________________________________
const NavArrowContainer = connect(
  mapStateToProps,
)(NavArrow)

export default NavArrowContainer
