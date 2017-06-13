// @flow
/*
HOC that adds basic structure and behavior for all pages but Home, this behavior
comprehends:

- loading sequence
- layout
 */
import React from 'react'

// ASSETS ______________________________________________________________________
import './PageTemplate.sass'

// ANIMATIONS __________________________________________________________________
import PopIn from '../../animations/PopIn'

// COMPONENTS __________________________________________________________________
import Filter from '../../components/Filter'
import NavArrow from '../../components/NavArrow'

// TYPES _______________________________________________________________________
import type {Component} from 'react-flow-types'

export type ConfigObj = {
  topNavArrowLabel: string,
  bottomNavArrowLabel?: string,
  last?: boolean,
  headingImg: string,
  headingAriaLabel: string
}

// FOOTER ______________________________________________________________________
const Footer = () => (
  <div className="end-footer">
    Crafted with ❤ by Carlos Frías
  </div>
)

// FUNCTION DEFINITION _________________________________________________________
const pageTemplate = (WrappedComponent: Component<Object>, config: ConfigObj) => {
  const {
    topNavArrowLabel,
    bottomNavArrowLabel,
    headingImg,
    last,
    headingAriaLabel
  } = config
  // COMPONENT _________________________________________________________________
  return class PageTemplate extends React.Component {
    state: {
      titleAnimationEnd: boolean
    }

    constructor(props: Object) {
      super(props)

      this.state = {
        titleAnimationEnd: false
      }
    }

    render() {
      const {titleAnimationEnd} = this.state
      return (
        <main className="page-template">
          <NavArrow direction="up" label={topNavArrowLabel}
            ready={titleAnimationEnd} />

          <Filter type="top"/>
          <Filter type="bottom"/>

          <header className="section-header w-100">
            <PopIn onRest={f => {this.setState({titleAnimationEnd: true})}}>
              <h1 className="section__heading"
                aria-label={headingAriaLabel}
              >
                <img src={headingImg} alt="About" className="img__heading"/>
              </h1>
            </PopIn>
          </header>

          <WrappedComponent ready={titleAnimationEnd} {...this.props}/>

          {
            last
            ? Footer()
            : (
              <NavArrow direction="down" label={bottomNavArrowLabel}
                ready={titleAnimationEnd}/>
            )
          }
        </main>
      )
    }
  }
}


export default pageTemplate
