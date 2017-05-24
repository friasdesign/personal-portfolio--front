// @flow

import React from 'react'

import './NavArrow.sass'

// ASSETS ______________________________________________________________________
const icons = {
  up: require('./_assets/up.svg'),
  down: require('./_assets/down.svg')
}

type NavArrowProps = {
  direction: 'up' | 'down'
}

const NavArrow = ({direction}: NavArrowProps) => {
  return (
    <a className={`nav-arrow nav-arrow--${direction}`}
      href={`#${direction}`}
      aria-role="button"
    >
      <img className="nav-arrow__arrow" src={icons[direction]} alt={direction}/>
      Go one page {direction}
    </a>
  )
}

export default NavArrow
