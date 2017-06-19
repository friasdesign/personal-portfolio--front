// @flow
import {connect} from 'react-redux'

// SELECTORS ___________________________________________________________________
import {
  toggleMenuOpen
} from '../../ducks'

// COMPONENT ___________________________________________________________________
import Navbar from './Navbar'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps({menuOpen}) {
  return {
    menuOpen
  }
}

// DEFINE CONTAINER ____________________________________________________________
const NavbarContainer = connect(
  mapStateToProps, {
    toggleMenuOpen
  }
)(Navbar)

export default NavbarContainer
