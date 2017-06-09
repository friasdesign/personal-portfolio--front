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
  bottomNavArrowLabel: string,
  headingImg: string,
  headingAriaLabel: string
}

// FUNCTION DEFINITION _________________________________________________________
const pageTemplate = (WrappedComponent: Component<Object>, config: ConfigObj) => {
  const {
    topNavArrowLabel,
    bottomNavArrowLabel,
    headingImg,
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

          <header className="section-header about__header">
            <PopIn onRest={f => {this.setState({titleAnimationEnd: true})}}>
              <h1 className="section__heading"
                aria-label={headingAriaLabel}
              >
                <img src={headingImg} alt="About" className="img__heading"/>
              </h1>
            </PopIn>
          </header>

          <WrappedComponent ready={titleAnimationEnd} {...this.props}/>

          <NavArrow direction="down" label={bottomNavArrowLabel}
            ready={titleAnimationEnd}/>
        </main>
      )
    }
  }
}


export default pageTemplate
