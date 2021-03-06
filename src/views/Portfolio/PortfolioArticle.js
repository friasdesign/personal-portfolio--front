// @flow
import React from 'react'

// PROJECT ENTRY COMPONENT _____________________________________________________
import ProjectEntry from './ProjectEntry'

// TYPES ________________________________________________________________________
import type {ProjectType} from './_data'

type PortfolioArticleProps = {
  heading: string,
  ready: boolean,
  entries: Array<ProjectType>
}

const PortfolioArticle = (props: PortfolioArticleProps) => {
  const {
    heading,
    ready,
    entries
  } = props

  return (
    <section className={`portfolio__entries m-btm-6 w-100 fade-side ${
        ready
        ? ''
        : 'fade-right'
      }`}>
      <h2 className="article-heading m-btm-4">
        {heading}
      </h2>
      {
        entries.map((p, i) =>
          <ProjectEntry
            key={i}
            project={p}
          />
        )
      }
    </section>
  )
}

export default PortfolioArticle
