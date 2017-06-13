// @flow
import React from 'react'

import type {entryType} from '../../_types'

const Img = ({entry}: {entry: entryType}) => (
  <img src={entry.logo} alt={`Logo of ${entry.h}`} className="entry__logo"/>
)

export default Img
