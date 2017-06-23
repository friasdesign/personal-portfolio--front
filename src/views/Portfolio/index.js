// @flow
import React from 'react'

// ASSETS ______________________________________________________________________
import headingImg from './PortfolioHeading'

// DATA ________________________________________________________________________
import {
  featured,
  ongoing,
  teenyTiny
} from './_data'

// COMPONENTS __________________________________________________________________
import ArticleLine from '../../components/ArticleLine'
import PageTemplate from '../../components/PageTemplate'

// TYPES _______________________________________________________________________
import type {
  NormalPageProps
} from '../../_types'

// PORTFOLIO ARTICLE  __________________________________________________________
import PortfolioArticle from './PortfolioArticle'

const Portfolio = (props: NormalPageProps) => {
  const {
    ready
  } = props

  return (
    <div className="template-container">

    <PortfolioArticle
      heading="Featured"
      ready={ready}
      entries={featured}
    />

    <PortfolioArticle
      heading="Ongoing"
      ready={ready}
      entries={ongoing}
    />

    <ArticleLine
      heading="Teeny-Tiny"
      entries={teenyTiny}
      theme="mono"
    />

    </div>
  )
}

const configObj = {
  topNavArrowLabel: 'Skills',
  bottomNavArrowLabel: 'Contact',
  headingImg,
  headingAriaLabel: 'Portfolio',
  nextPage: '/contact',
  previousPage: '/skills'
}

export const PortfolioTesting = PageTemplate(Portfolio, configObj, true)

export default PageTemplate(Portfolio, configObj)
