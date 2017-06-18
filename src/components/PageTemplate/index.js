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
  setIsLast,
  setPreviousPage,
  setNextPage
} from '../../ducks'

// TYPES _______________________________________________________________________
import type {Component} from 'react-flow-types'

export type ConfigObj = {
  topNavArrowLabel: string,
  bottomNavArrowLabel?: string,
  last?: boolean,
  headingImg: string,
  headingAriaLabel: string,
  nextPage: string,
  previousPage: string
}

type PageTemplateProps = {
  inTransitionAnimation: [boolean, string],
  setIsLast: () => void,
  // nextPage: string,
  setNextPage: () => void,
  // previousPage: string,
  setPreviousPage: () => void
}

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps({inTransitionAnimation, nextPage, previousPage}: Object): Object {
  return {
    inTransitionAnimation,
    nextPage,
    previousPage
  }
}

// FUNCTION DEFINITION _________________________________________________________
const pageTemplate = (WrappedComponent: Component<Object>, config: ConfigObj) => {
  const {
    topNavArrowLabel,
    bottomNavArrowLabel,
    headingImg,
    last,
    headingAriaLabel,
    nextPage,
    previousPage
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

    /**
     * Call dispatch on navigation pages, those are `nextPage` and `previousPage`
     * only if they are differentfrom the actual value on the state, since it
     * gets evaluated each time a new prop is passed to `PageTemplate`.
     *
     * @param {string} nextPage     Next page URL
     * @param {string} previousPage Previous page URL
     */
    setNavigationPages(nextPage: string, previousPage: string) {
        this.props.setNextPage(nextPage)
        this.props.setPreviousPage(previousPage)
    }

    componentDidMount() {
      this.props.setIsLast(Boolean(last))
      this.setNavigationPages(nextPage, previousPage)
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
          <NavArrow direction="up" link={previousPage} label={topNavArrowLabel}
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
              <NavArrow direction="down" link={nextPage}
                label={bottomNavArrowLabel}
                ready={titleAnimationEnd}/>
            )
          }
        </main>
      )
    }
  }

  const PageTemplateContainer = connect(
    mapStateToProps, {
      setIsLast,
      setPreviousPage,
      setNextPage
    }
  )(PageTemplate)

  return PageTemplateContainer
}

export default pageTemplate
