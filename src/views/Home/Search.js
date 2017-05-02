import React from 'react'

import './Search.sass'
import glass from './mag-glass.svg'

function Search() {
  return (
    <div className="search">
      <div className="mag-glass-container">
        <img src={glass} alt="Search" className="mag-glass"/>
      </div>
    </div>
  )
}

export default Search
