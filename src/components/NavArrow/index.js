// @flow
import {connect} from 'react-redux'

// COMPONENT ___________________________________________________________________
import NavArrow from './NavArrow'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps({onTop, onBottom}) {
  return {
    onTop,
    onBottom
  }
}

// DEFINE CONTAINER ____________________________________________________________
const NavArrowContainer = connect(
  mapStateToProps,
)(NavArrow)

export default NavArrowContainer
