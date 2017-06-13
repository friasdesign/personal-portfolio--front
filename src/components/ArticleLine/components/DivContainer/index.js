// @flow
import React from 'react'

import type {ContainerProps} from '../../_types'

const DivContainer = ({className, children}: ContainerProps) => (
  <div className={className}>{children}</div>
)

export default DivContainer
