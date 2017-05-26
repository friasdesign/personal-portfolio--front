// @flow
import React from 'react'
import {Motion, spring} from 'react-motion'

// TYPES _______________________________________________________________________
import type {ReactChildren} from 'react-flow-types'

const SPRING_SET = {stiffness: 50, damping: 15}

type FadeFromSideProps = {
  children: ReactChildren,
  defaultX: number,
  onRest: () => void
}

function FadeFromSide(props: FadeFromSideProps) {
  const {
    onRest,
    children,
    defaultX
  } = props

  const child = React.Children.only(children)

  return(
    <Motion
      defaultStyle={{
        o: 0,
        x: defaultX
      }}
      style={{
        o: spring(1, SPRING_SET),
        x: spring(0, SPRING_SET)
      }}
      onRest={onRest.bind({})}
    >
      {
        ({o, x}) => (
          React.cloneElement(child, {
            style: {
              opacity: o,
              transform: `translate(${x}px, 0)`
            }
          })
        )
      }
    </Motion>
  )
}

export default FadeFromSide
