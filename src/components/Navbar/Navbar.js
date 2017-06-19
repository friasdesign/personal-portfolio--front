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

// TYPES _______________________________________________________________________
import type {Element, FunctionalComponent} from 'react-flow-types'

type inputProps = {
  minimal: boolean,
  menuOpen: boolean,
  toggleMenuOpen: () => void
}

type withMinimalProps = inputProps & {
  headerComponentClassName: string,
  logoContainer: (Object) => Element<any> | null,
  hamburgerStyle: {display?: string},
  listOnTop: () => Element<any> | null
}

type withMenuOpenProps = withMenuOpenProps & {
  renderHamburger: (FunctionalComponent<Object>, number) => Element<any>,
  listOnBottom: () => Element<any> | null
}

// HELPERS _____________________________________________________________________
const addMotionToComponent = (component, key) => (
  <Motion key={key} defaultStyle={{x: 0}}
    style={{x: spring(1, presets.gentle)}}
    >
    {s => component({style: s})}
  </Motion>
)

// SMALL COMPONENTS ____________________________________________________________
function logoContainer({logo}: {logo: string}) {
  return (
    <div className="logo-container">
      <img src={logo} alt="logo" className="logo" />
    </div>
  )
}

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
      : logoContainer,
    hamburgerStyle: minimal
      ? {display: 'block'}
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

const Navbar = _.compose(
  render,
  processMenuOpen,
  processMinimal
)

export default Navbar
