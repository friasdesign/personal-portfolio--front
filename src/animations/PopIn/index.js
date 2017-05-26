// @flow
import React from 'react'
import {Motion, spring, presets} from 'react-motion'

// TYPES _______________________________________________________________________
import type {ReactChildren} from 'react-flow-types'

const SPRING_SET = {stiffness: 50, damping: 15}

type PopInProps = {
  // TODO: Add check for React Symbol only
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
        o: spring(1, SPRING_SET),
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
