// @flow
/*
HOC that adds basic structure and behavior for all pages but Home, this behavior
comprehends:

- loading sequence
- layout
 */
import React from 'react'
import {connect} from 'react-redux'

// ASSETS ______________________________________________________________________
import './PageTemplate.sass'

// ANIMATIONS __________________________________________________________________
import PopIn from '../../animations/PopIn'

// COMPONENTS __________________________________________________________________
import NavArrow from '../NavArrow'
import Footer from './Footer'

// ACTIONS _____________________________________________________________________
import {
  setIsLast
} from '../../ducks'

// TYPES _______________________________________________________________________
import type {Component} from 'react-flow-types'

export type ConfigObj = {
  topNavArrowLabel: string,
  bottomNavArrowLabel?: string,
  last?: boolean,
  headingImg: string,
  headingAriaLabel: string
}

type PageTemplateProps = {
  inTransitionAnimation: [boolean, string],
  setIsLast: () => void
}

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps({inTransitionAnimation}: Object): Object {
  return {
    inTransitionAnimation
  }
}

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
  class PageTemplate extends React.Component {
    state: {
      titleAnimationEnd: boolean
    }

    props: PageTemplateProps

    constructor(props: PageTemplateProps) {
      super(props)

      this.state = {
        titleAnimationEnd: false
      }
    }

    componentDidMount() {
      this.props.setIsLast(Boolean(last))
    }

    render() {
      const {titleAnimationEnd} = this.state
      const {
        inTransitionAnimation,
        ...passThru
      } = this.props

      return (
        <main className={`page-template transition-animation ${
          inTransitionAnimation[0]
          ? `transition-animation-${inTransitionAnimation[1]}--init`
          : ''
        }`}>
          <NavArrow direction="up" label={topNavArrowLabel}
            ready={titleAnimationEnd} />

          <header className="section-header w-100">
            <PopIn onRest={f => {this.setState({titleAnimationEnd: true})}}>
              <h1 className="section__heading"
                aria-label={headingAriaLabel}
              >
                <img src={headingImg} alt="About" className="img__heading"/>
              </h1>
            </PopIn>
          </header>

          <WrappedComponent ready={titleAnimationEnd} {...passThru}/>

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

  const PageTemplateContainer = connect(
    mapStateToProps, {
      setIsLast
    }
  )(PageTemplate)

  return PageTemplateContainer
}

export default pageTemplate
