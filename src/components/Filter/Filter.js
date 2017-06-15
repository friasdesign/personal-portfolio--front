// @flow
import React from 'react'

import './Filter.sass'

// TYPES _______________________________________________________________________
type FilterProps = {
  type: string,
  atTop: boolean,
  atBottom: boolean
}

// COMPONENT ___________________________________________________________________
const Filter = ({type, atTop, atBottom}: FilterProps) => {
  const hidden = type === 'top' ? atTop : atBottom
  const className = `filter-${type} ${hidden ? 'filter--hidden' : ''}`

  return (
    <div className={`filter ${className}`}
      aria-hidden
    />
  )
}

export default Filter
