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
  atTop: boolean,
  atBottom: boolean,
  link: string,
  ready: boolean,
  label: string,
  text?: string,
  shouldRender?: boolean,
  defaultY?: number
}

const SPRING_SET = {stiffness: 28, damping: 13}

// COMPONENT DEFINITION ________________________________________________________
const NavArrowComponent = ({link, direction, text, defaultY}: NavArrowProps) => {
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
                    <a className={`nav-arrow nav-arrow--${direction}`}
                      href={link}
                      style={{
                        opacity: o,
                        transform: `scale(${t}) translateY(${y}px)`
                      }}
                    >
                      <img className="nav-arrow__arrow" src={icons[direction]} alt={direction}/>
                      {text}
                    </a>
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
