// @flow
import React from 'react'
import _ from 'ramda'
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
  direction: 'up' | 'down',
  onTop: boolean,
  onBottom: boolean,
  shouldRender?: boolean,
  defaultY?: number
}

const SPRING_SET = {stiffness: 28, damping: 13}

// COMPONENT DEFINITION ________________________________________________________
const NavArrowComponent = ({direction, defaultY}: NavArrowProps) => {
  return (
    <div className={`nav-arrow-container nav-arrow-container--${direction}`}>
      <Motion
        defaultStyle={{
          y: defaultY || 0
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
    </div>
  )
}

// ADD SHOULD DISPLAY __________________________________________________________
const addShouldRender = (props: NavArrowProps) => {
  const {onTop, onBottom, direction} = props

  switch(direction) {
    case 'up':
      return {shouldRender: onTop, ...props}
    case 'down':
      return {shouldRender: onBottom, ...props}
    default:
      return props
  }
}

// ADD DEFAULT Y _______________________________________________________________
const addDefaultY = (props: NavArrowProps) => {
  const {direction} = props

  switch(direction) {
    case 'up':
      return {defaultY: 20, ...props}
    case 'down':
      return {defaultY: -20, ...props}
    default:
      return props
  }
}

// RENDER COMPONENT ____________________________________________________________
const NavArrowRender = (props: NavArrowProps) => {
  const {shouldRender} = props
  return shouldRender
    ? NavArrowComponent(props)
    : <div className="nav-arrow-container"/>
}

// COMPOSE COMPONENT ___________________________________________________________
const NavArrow = _.compose(
  NavArrowRender,
  addDefaultY,
  addShouldRender
)

export default NavArrow
