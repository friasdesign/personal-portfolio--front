// @flow
import React from 'react'
import _ from 'ramda'
import {Motion, spring} from 'react-motion'
import {ReactMotionLoop} from 'react-motion-loop'

// COMPONENTS __________________________________________________________________
import UpArrow from './UpArrow'
import DownArrow from './DownArrow'

// ASSETS ______________________________________________________________________
import './NavArrow.sass'

// TYPES _______________________________________________________________________
type NavArrowProps = {
  direction: 'up' | 'down',
  triggerTransition: (string) => void,
  atTop: boolean,
  atBottom: boolean,
  ready: boolean,
  label: string,
  text?: string,
  shouldRender?: boolean,
  defaultY?: number
}

const SPRING_SET = {stiffness: 28, damping: 13}

const renderArrow = (direction: string) => {
  switch(direction) {
    case 'up':
      return UpArrow()
    case 'down':
      return DownArrow()
    default:
      return null
  }
}

// COMPONENT DEFINITION ________________________________________________________
const NavArrowComponent = ({triggerTransition, direction, text, defaultY}: NavArrowProps) => {
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
                      onClick={triggerTransition.bind(this, direction)}
                      style={{
                        opacity: o,
                        transform: `scale(${t}) translateY(${y}px)`
                      }}
                    >
                      <div className="nav-arrow__arrow">
                        {renderArrow(direction)}
                      </div>
                      {text}
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
  const {atTop, atBottom, direction, ready} = props

  switch(direction) {
    case 'up':
      return {shouldRender: atTop && ready, ...props}
    case 'down':
      return {shouldRender: atBottom && ready, ...props}
    default:
      return props
  }
}

// ADD PROPS FOR UP ____________________________________________________________
const addPropsForUp = (props: NavArrowProps) => {
  return {
    defaultY: 20,
    shouldRender: props.atTop,
    text: `back to ${props.label}`,
    ...props
  }
}

// ADD PROPS FOR DOWN __________________________________________________________
const addPropsForDown = (props: NavArrowProps) => {
  return {
    defaultY: -20,
    shouldRender: props.atBottom,
    text: `next to ${props.label}`,
    ...props
  }
}

// ADD EXTRA PROPS _____________________________________________________________
const addExtraProps = (props: NavArrowProps) => {
  const {direction} = props

  switch(direction) {
    case 'up':
      return addPropsForUp(props)
    case 'down':
      return addPropsForDown(props)
    default:
      return props
  }
}

// RENDER COMPONENT ____________________________________________________________
const NavArrowRender = (props: NavArrowProps) => {
  const {shouldRender, direction} = props
  return shouldRender
    ? NavArrowComponent(props)
    : <div className={`nav-arrow-container nav-arrow-container--${direction}`}/>
}

// COMPOSE COMPONENT ___________________________________________________________
const NavArrow = _.compose(
  NavArrowRender,
  addExtraProps,
  addShouldRender
)

export default NavArrow
