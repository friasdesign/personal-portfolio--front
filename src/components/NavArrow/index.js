// @flow
import React from 'react'
import {Motion, spring} from 'react-motion'
import {ReactMotionLoop} from 'react-motion-loop'

// ASSETS ______________________________________________________________________
import './NavArrow.sass'

const icons = {
  up: require('./_assets/up.svg'),
  down: require('./_assets/down.svg')
}

// TYPES _______________________________________________________________________
type NavArrowProps = {
  direction: 'up' | 'down'
}

const SPRING_SET = {stiffness: 28, damping: 13}

// COMPONENT DEFINITION ________________________________________________________
const NavArrow = ({direction}: NavArrowProps) => {
  return (
    <Motion
      defaultStyle={{
        y: 50
      }}
      style={{
        y: spring(0, SPRING_SET)
      }}
    >
      {
        ({y}) => (
          <ReactMotionLoop
            styleFrom={{
              o: 0.6,
              t: spring(0.8, SPRING_SET)
            }}
            styleTo={{
              o: spring(0.8, SPRING_SET),
              t: spring(1, SPRING_SET)
            }}
          >
            {
              ({o, t}) => (
                <div className={`nav-arrow nav-arrow--${direction}`}
                  href={`#${direction}`}
                  style={{
                    opacity: o,
                    transform: `scale(${t}) translateY(${y}px)`
                  }}
                >
                  <img className="nav-arrow__arrow" src={icons[direction]} alt={direction}/>
                  Go one page {direction}
                </div>
              )
            }
          </ReactMotionLoop>
        )
      }
    </Motion>
  )
}

export default NavArrow
