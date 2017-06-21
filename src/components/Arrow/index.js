// @flow
import React from 'react'
import {Motion, spring} from 'react-motion'
import {ReactMotionLoop} from 'react-motion-loop'

import arrow from './arrow.svg'

import './Arrow.sass'

const SPRING_SET = {stiffness: 32, damping: 10}

// TYPES _______________________________________________________________________
type ArrowProps = {
  up?: boolean,
  triggerTransition: (string) => void
}

function Arrow({up = false, triggerTransition}: ArrowProps) {
  const direction = up ? 'up' : 'down'
  return(
    <Motion
      defaultStyle={{o: 0}}
      style={{o: spring(1, SPRING_SET)}}
    >
      {
        ({o}) => (
          <ReactMotionLoop
            styleFrom={{ t: spring(-28, SPRING_SET) }}
            styleTo={{t: spring(1, SPRING_SET)}}
          >
            {
              ({t}) => {
                return (
                <div onClick={triggerTransition.bind(this, direction)} className="arrow-container">
                  <img style={{
                      opacity: o,
                      transform: `translate(0, ${t}px)`
                    }} src={arrow} alt="Arrow-down" className="arrow"/>
                </div>
              )}
            }
          </ReactMotionLoop>
        )
      }
    </Motion>
  )
}

export default Arrow
