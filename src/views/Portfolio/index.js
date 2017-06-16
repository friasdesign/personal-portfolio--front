// @flow
import React from 'react'

// ASSETS ______________________________________________________________________
import headingImg from './_assets/heading.svg'

// DATA ________________________________________________________________________
import {
  featured,
  ongoing,
  teenyTiny
} from './_data'

// COMPONENTS __________________________________________________________________
import ArticleLine from '../../components/ArticleLine'
import PageTemplate from '../../components/PageTemplate'

// PORTFOLIO ARTICLE  __________________________________________________________
import PortfolioArticle from './PortfolioArticle'

const Portfolio = ({ready}: {ready: boolean}) => (
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

export default PageTemplate(Portfolio, {
  topNavArrowLabel: 'Skills',
  bottomNavArrowLabel: 'Contact',
  headingImg,
  headingAriaLabel: 'Portfolio'
})
