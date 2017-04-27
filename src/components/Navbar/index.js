import React from 'react'

// IMPORT ASSETS _______________________________________________________________
import './Navbar.sass'
import logo from './logo.svg'

function Navbar(props) {
  return (
    <header role="banner" className="top-nav">
      <div className="top-nav__on-top">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <ul className="top-nav__list">
          <li><a href="#about" className="top-nav__link">About</a></li>
          <li><a href="#skills" className="top-nav__link">Skills</a></li>
          <li><a href="#portfolio" className="top-nav__link">Portfolio</a></li>
          <li><a href="#contact" className="top-nav__link">Contact</a></li>
        </ul>
      </div>
      <div className="subline" aria-hidden></div>
    </header>
  )
}

export default Navbar
