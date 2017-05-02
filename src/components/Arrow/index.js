import React from 'react'
import {Motion, spring} from 'react-motion'
import {ReactMotionLoop} from 'react-motion-loop'

import arrow from './arrow.svg'

const SPRING_SET = {stiffness: 32, damping: 10}

function Arrow({up = false}) {
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
                <div className="arrow-container">
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
