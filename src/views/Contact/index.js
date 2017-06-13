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

const Contact = ({ready}: {ready: boolean}) => (
  <div className="w-100 flx-col flx-al-center">
    <TextArticle ready={ready}>
      <p>
        Contact me if you want to propose a project to develop together, hire me,
        {' '}or even talk about programming a little. I am currently
        {' '}<strong>AVAILABLE FOR HIRING</strong>.
      </p>
    </TextArticle>

    <ArticleLine
      heading="Contact Info"
      entries={contactInfo}
      theme="mono"
      hoverEnabled={true}
    />
  </div>
)

export default PageTemplate(Contact, {
  topNavArrowLabel: 'Portfolio',
  last: true,
  headingImg,
  headingAriaLabel: 'Contact'
})
