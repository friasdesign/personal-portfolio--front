import React from 'react'

function Cross({style}) {
  const {x} = style
  return (
    <svg style={{transform: `scale(${x}, ${x})`}} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
      <g fill="none" fillRule="evenodd" stroke="#BCBCBC" strokeWidth="2" transform="translate(13 12)" strokeLinecap="square">
        <path d="M.5 21.5L22.5.5M.5.5L22.5 21.5"/>
      </g>
    </svg>
  )
}

export default Cross
