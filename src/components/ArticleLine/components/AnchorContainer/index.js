// @flow
import React from 'react'

import './AnchorContainer.sass'

import type {ContainerProps} from '../../_types'

const AnchorContainer = ({link, className, children}: ContainerProps) => (
  <a href={link} target="_blank" className={`${className || ''} hover-entry`}>
    {children}
  </a>
)

export default AnchorContainer
