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

// PROJECT ENTRY _______________________________________________________________
import ProjectEntry from './ProjectEntry'

const Portfolio = ({ready}: {ready: boolean}) => (
  <div className="w100 flx-col flx-al-center">
  <article className="m-btm-2">
    <h2 className={`article-heading fade-side ${
        ready
        ? ''
        : 'fade-left'
      }`}>
      Levels
    </h2>
    <div className={`article-text fade-side ${
        ready
        ? ''
        : 'fade-right'
      }`}>
      <p>
        I have divided my skills into different levels of proficiency, those are, from most proficient to least proficient:
      </p>
      <ul className="text-list">
        <li><strong>Ninja</strong>. A nerd master of the geek arts.</li>
        <li><strong>Proficient</strong>. Can use that technology under a tight schedule, without too much research needed.</li>
        <li><strong>Jargon</strong>. Understand all domain-specific lingo, and use it regularly, but feel better talking about it than doing it.</li>
        <li><strong>Wannabe</strong>. One day I wan’t to become a Ninja of this.</li>
      </ul>
      <p>
        I changed the levels names for human languages, but those used are self explanatory.
      </p>
    </div>
  </article>

  <section className="portfolio__featured">
    <h2 className={`article-heading fade-side ${
        ready
        ? ''
        : 'fade-right'
      }`}>
      Featured
    </h2>
    {
      featured.map((p, i) =>
        <ProjectEntry
          key={i}
          project={p}
        />
      )
    }
  </section>

  <section className="portfolio__ongoing">
    <h2 className={`article-heading fade-side ${
        ready
        ? ''
        : 'fade-right'
      }`}>
      Ongoing
    </h2>
    {
      ongoing.map((p, i) =>
        <ProjectEntry
          key={i}
          project={p}
        />
      )
    }
  </section>

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
