// @flow
import React from 'react'
import {Motion, spring, presets} from 'react-motion'
import _ from 'ramda'

// IMPORT ASSETS _______________________________________________________________
import './Navbar.sass'
import logo from './logo.svg'
import Hamburger from './Hamburger'
import Cross from './Cross'

// ANIMATIONS __________________________________________________________________
import FadeIn from '../../animations/FadeIn'

// IMPORT COMPONENTS ___________________________________________________________
import List from './List'
import LogoContainer from './components/LogoContainer'

// TYPES _______________________________________________________________________
import type {
  inputProps,
  withMinimalProps,
  withMenuOpenProps
} from './_types'

// HELPERS _____________________________________________________________________
const addMotionToComponent = (component, key) => (
  <Motion key={key} defaultStyle={{x: 0}}
    style={{x: spring(1, presets.gentle)}}
    >
    {s => component({style: s})}
  </Motion>
)

const nullComponent = () => null

// PROCESS MINIMAL _____________________________________________________________
const processMinimal = (props: inputProps): withMinimalProps => {
  const {minimal} = props

  return {
    ...props,
    headerComponentClassName: minimal
      ? 'top-nav--minimal'
      : '',
    logoContainer: minimal
      ? nullComponent
      : LogoContainer,
    hamburgerStyle: minimal
      ? { display: 'block',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, .75)',
        borderRadius: '0.775rem'
      }
      : {},
    listOnTop: minimal
      ? nullComponent
      : () => <List topNav={true} />
  }
}

// PROCESS MENU OPEN ___________________________________________________________
const processMenuOpen = (props: withMinimalProps): withMenuOpenProps => {
  const {
    menuOpen,
    headerComponentClassName
  } = props

  return {
    ...props,
    headerComponentClassName: menuOpen
      ? headerComponentClassName + ' top-nav--open'
      : headerComponentClassName,
    renderHamburger: menuOpen
      ? addMotionToComponent.bind({}, Cross, 1)
      : addMotionToComponent.bind({}, Hamburger, 2),
    listOnBottom: menuOpen
      ? () => <List topNav={false} />
    : nullComponent
  }
}

// RENDER FUNCTION _____________________________________________________________
const render = (props: withMenuOpenProps) => {
  const {
    headerComponentClassName,
    logoContainer,
    hamburgerStyle,
    toggleMenuOpen,
    renderHamburger,
    listOnTop,
    listOnBottom
  } = props

  return (
    <FadeIn onRest={f => f}>
      <header role="banner" className={`top-nav ${headerComponentClassName}`}>
        <div className="top-nav__on-top">
          {logoContainer({logo})}

          <div className="hamburger" onClick={toggleMenuOpen}
            style={hamburgerStyle}
          >
            {renderHamburger()}
          </div>

          {listOnTop()}

        </div>

        {listOnBottom()}

      </header>
    </FadeIn>
  )
}

// DEFINE NAVBAR COMPONENT _____________________________________________________
const Navbar = _.compose(
  render,
  processMenuOpen,
  processMinimal
)

export default Navbar
