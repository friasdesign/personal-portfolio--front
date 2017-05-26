// @flow
import React from 'react'
import {Motion, spring, presets} from 'react-motion'

// TYPES _______________________________________________________________________
import type {ReactChildren} from 'react-flow-types'

type PopInProps = {
  children: ReactChildren,
  onRest: () => void
}

function PopIn(props: PopInProps) {
  const {
    onRest,
    children
  } = props

  const child = React.Children.only(children)

  return(
    <Motion
      defaultStyle={{
        o: 0,
        s: 0.7
      }}
      style={{
        o: spring(1, presets.noWobble),
        s: spring(1, presets.wobbly)
      }}
      onRest={onRest.bind({})}
    >
      {
        ({o, s}) => (
          React.cloneElement(child, {
            style: {
              opacity: o,
              transform: `scale(${s})`
            }
          })
        )
      }
    </Motion>
  )
}

export default PopIn
