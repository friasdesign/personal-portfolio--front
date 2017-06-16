// @flow
import React from 'react'

// ASSETS ______________________________________________________________________
import headingImg from './_assets/heading.svg'
import './Contact.sass'

// DATA ________________________________________________________________________
import {contactInfo} from './_data'

// COMPONENTS __________________________________________________________________
import ArticleLine from '../../components/ArticleLine'
import PageTemplate from '../../components/PageTemplate'
import TextArticle from '../../components/TextArticle'

// TYPES _______________________________________________________________________
import type {
  NormalPageProps
} from '../../_types'

const Contact = (props: NormalPageProps) => {
  const {
    ready
  } = props

  return (
    <div className="template-container template-container--last over-x-hidden">
      <TextArticle heading="let's talk!" ready={ready}>
        <p>
          Contact me if you want to propose a project to develop together, hire me,
          {' '}or even talk about programming a little. I am currently
          {' '}<strong>AVAILABLE FOR HIRING</strong>.
        </p>
      </TextArticle>

      <ArticleLine
        className={`fade-side ${
          ready
          ? ''
          : 'fade-right'
        }`}
        heading="Contact Info"
        entries={contactInfo}
        theme="mono"
        hoverEnabled={true}
      />
    </div>
  )
}

export default PageTemplate(Contact, {
  topNavArrowLabel: 'Portfolio',
  last: true,
  headingImg,
  headingAriaLabel: 'Contact',
  nextPage: '',
  previousPage: '/portfolio'
})
