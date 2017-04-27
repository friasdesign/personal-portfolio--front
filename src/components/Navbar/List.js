import React from 'react'
import {StaggeredMotion, spring} from 'react-motion'

const MENU_ITEMS = [
  {
    name: 'about',
    link: '#about'
  },
  {
    name: 'skills',
    link: '#skills'
  },
  {
    name: 'portfolio',
    link: '#portfolio'
  },
  {
    name: 'contact',
    link: '#contact'
  }
]

const STIFFNESS = 400
const DAMPING = 60

function TopList() {
  return (
    <ul className="nav__list top-nav__list">
      {
        MENU_ITEMS.map(({link, name}, i) => (
          <li key={i}><a href={link} className="top-nav__link">{name}</a></li>
        ))
      }
    </ul>
  )
}

function List({topNav}) {
  if(topNav) return TopList()

  return (
    <StaggeredMotion
      defaultStyles={MENU_ITEMS.map((item, i) => ({x: -100, o: 0}))}
      styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
        return i === 0
          // Initial stiffness and damping
          ? {
              x: spring(0, { stiffness: STIFFNESS, damping: DAMPING }),
              o: spring(1)
            }
          // Final stiffness and damping
          : {
              x: spring(prevInterpolatedStyles[i - 1].x,
                { stiffness: STIFFNESS, damping: DAMPING }
              ),
              o: spring(prevInterpolatedStyles[i - 1].o)
            };
      })}
    >
      {interpolatingStyles =>
        <ul className="nav__list">
          {interpolatingStyles.map(({x, o}, i) => {
            const styles = {
              transform: `translate(${x}px, 0)`,
              opacity: o
            }

            return (
              <li key={i} style={styles}>
                <a href={MENU_ITEMS[i].link} className="top-nav__link">
                  {MENU_ITEMS[i].name}
                </a>
              </li>
            )
          })}
        </ul>
      }
    </StaggeredMotion>
  )
}

export default List
