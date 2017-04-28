import React from 'react'

import arrow from './arrow.svg'

function Arrow({up = false}) {
  return(
    <div className="arrow-container">
      <img src={arrow} alt="Arrow-down" className="arrow"/>
    </div>
  )
}

export default Arrow
