// @flow
import React from 'react'

import type {ContainerProps} from '../../_types'

const AnchorContainer = ({link, className, children}: ContainerProps) => (
  <a href={link} className={`hover-entry ${className || ''}`} style={{display: 'block'}}>
    {children}
  </a>
)

export default AnchorContainer
