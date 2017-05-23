import React, {Component} from 'react'
import {Motion, spring, presets} from 'react-motion'

// IMPORT ASSETS _______________________________________________________________
import './Navbar.sass'
import logo from './logo.svg'
import Hamburger from './Hamburger'
import Cross from './Cross'

// ANIMATIONS __________________________________________________________________
import FadeIn from '../../animations/FadeIn'

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

 addMotionToComponent(component, key) {
   return (
     <Motion key={key} defaultStyle={{x: 0}}
       style={{x: spring(1, presets.gentle)}}
       >
       {interpolatingStyle => component({style: interpolatingStyle})}
     </Motion>
   )
 }

  // TODO: refactor to better syntax
  render() {
    const {navOpen} = this.state
    const {addMotionToComponent} = this
    const {minimal} = this.props

    const minimalStyle = minimal ? {display: 'block'} : {}

    return (
      <FadeIn
        onRest={f => f}
      >
        <header role="banner"
          className={`top-nav ${navOpen ? 'top-nav--open' : ''}
            ${minimal ? 'top-nav--minimal' : ''}
          `}
          >
          <div className="top-nav__on-top">
            {
              minimal
              ? null
              : (
                <div className="logo-container">
                  <img src={logo} alt="logo" className="logo" />
                </div>
              )
            }
            <div className="hamburger" onClick={this.toggleMenuHandler.bind(this)}
              style={minimalStyle}
            >
              {
                navOpen
                ? addMotionToComponent(Cross, 1)
                : addMotionToComponent(Hamburger, 2)
              }
            </div>
            {
              minimal
              ? null
              : <List topNav={true} />
            }
          </div>
          {
            navOpen
            ? <List topNav={false} />
            : null
          }
        </header>
      </FadeIn>
    )
  }
}

export default Navbar
