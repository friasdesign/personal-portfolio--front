// @flow

import React from 'react'

import {Motion, spring} from 'react-motion'

const SPRING_SET = {stiffness: 50, damping: 15}

type FadeInProps = {
  // TODO: Add check for React Symbol only
  children: any,
  onRest: () => void
}

function FadeIn(props: FadeInProps) {
  const {
    onRest,
    children
  } = props

  return(
    <Motion
      defaultStyle={{o: 0}}
      style={{o: spring(1, SPRING_SET)}}
      onRest={onRest.bind({})}
    >
      {
        ({o}) => (
          React.cloneElement(children, {
            style: {
              opacity: o
            }
          })
        )
      }
    </Motion>
  )
}

export default FadeIn
