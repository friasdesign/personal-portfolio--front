import React from 'react'

import './Filter.sass'

const Filter = ({type, onTop, onBottom}) => {
  const hidden = type === 'top' ? onTop : onBottom
  const className = `filter-${type} ${hidden ? 'filter--hidden' : ''}`

  return (
    <div className={`filter ${className}`}
      aria-hidden
    />
  )
}

export default Filter
