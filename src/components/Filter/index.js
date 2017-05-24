import React from 'react'

import './Filter.sass'

const FilterTop = ({type}) => {
  const className = `filter-${type}`

  return (
    <div className={`filter ${className}`}
      aria-hidden
    />
  )
}

export default FilterTop
