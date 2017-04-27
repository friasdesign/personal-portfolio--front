import React, {Component} from 'react'

// IMPORT ASSETS _______________________________________________________________
import './Navbar.sass'
import logo from './logo.svg'
import hamburger from './hamburger.svg'
import cross from './cross.svg'

// IMPORT COMPONENTS ___________________________________________________________
import List from './List'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navOpen: false
    }
  }

  toggleMenuHandler() {
    this.setState({
      navOpen: !this.state.navOpen
    })
  }

  renderSubline() {
    return <div className="subline" aria-hidden></div>
  }

  render() {
    const {navOpen} = this.state
    const {renderSubline} = this
    return (
      <header role="banner"
        className={`top-nav ${navOpen ? 'top-nav--open' : ''}`}
        >
        <div className="top-nav__on-top">
          <div className="logo-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="hamburger" onClick={this.toggleMenuHandler.bind(this)}>
            {
              navOpen
              ? <img src={cross} className="cross__icon" alt="Hamburger"/>
              : <img src={hamburger} className="hamburger__icon" alt="Hamburger"/>
            }
          </div>
        </div>
        {
          navOpen
          ? renderSubline()
          : null
        }
        {
          navOpen
          ? <List topNav={false} />
          : renderSubline()
        }
      </header>
    )
  }
}

export default Navbar
