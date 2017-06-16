// @flow
import React from 'react'

import './Filter.sass'

// TYPES _______________________________________________________________________
type FilterProps = {
  type: string,
  atTop: boolean,
  atBottom: boolean,
  atHome: boolean
}

// COMPONENT ___________________________________________________________________
const Filter = ({type, atTop, atBottom, atHome}: FilterProps) => {
  const hidden = type === 'top' ? atTop : atBottom
  const className = `filter-${type} ${hidden ? 'filter--hidden' : ''}`

  return atHome
    ? null
    : (
      <div className={`filter ${className}`}
        aria-hidden
      />
    )
}

export default Filter
