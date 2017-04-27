import React from 'react'

function List({topNav}) {
  return (
    <ul className={`nav__list ${topNav ? 'top-nav__list' : ''}`}>
      <li><a href="#about" className="top-nav__link">About</a></li>
      <li><a href="#skills" className="top-nav__link">Skills</a></li>
      <li><a href="#portfolio" className="top-nav__link">Portfolio</a></li>
      <li><a href="#contact" className="top-nav__link">Contact</a></li>
    </ul>
  )
}

export default List
