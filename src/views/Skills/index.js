// @flow
import React from 'react'

// ASSETS ______________________________________________________________________
import headingImg from './SkillsHeading'

// COMPONENTS __________________________________________________________________
import ArticleLine from '../../components/ArticleLine'
import PageTemplate from '../../components/PageTemplate'
import TextArticle from '../../components/TextArticle'

// DATA ________________________________________________________________________
import {
  mainSkills,
  comingSoon,
  sideSkills,
  humanLanguages
} from './_data'

// TYPES _______________________________________________________________________
import type {
  NormalPageProps
} from '../../_types'

// COMPONENT DEFINITION ________________________________________________________
const Skills = (props: NormalPageProps) => {
  const {
    ready
  } = props

  return (
    <div className="template-container over-x-hidden">
      <TextArticle heading="Levels" ready={ready}>
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
      </TextArticle>

      <ArticleLine
        className={`fade-side ${
          ready
          ? ''
          : 'fade-right'
        }`}
        heading="Main Skills"
        entries={mainSkills}
      />

      <ArticleLine
        heading="Coming Soon"
        entries={comingSoon}
      />

      <ArticleLine
        heading="Side Skills"
        entries={sideSkills}
        theme="mono"
      />

      <ArticleLine
        heading="Human Languages"
        entries={humanLanguages}
        theme="mono"
      />
    </div>
  )
}

const configObj = {
  topNavArrowLabel: 'About',
  bottomNavArrowLabel: 'Portfolio',
  headingImg,
  headingAriaLabel: 'Skills',
  nextPage: '/portfolio',
  previousPage: '/about'
}

export const SkillsTesting = PageTemplate(Skills, configObj, true)

export default PageTemplate(Skills, configObj)
