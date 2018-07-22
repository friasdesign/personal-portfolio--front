// @flow
import React from 'react'

// ASSETS ______________________________________________________________________
import headingImg from './AboutHeading'

// COMPONENTS __________________________________________________________________
import ArticleLine from '../../components/ArticleLine'
import PageTemplate from '../../components/PageTemplate'
import TextArticle from '../../components/TextArticle'

// DATA ________________________________________________________________________
import { education, interests } from './_data'

// TYPES _______________________________________________________________________
import type { NormalPageProps } from '../../_types'

// COMPONENT DEFINITION ________________________________________________________
const About = (props: NormalPageProps) => {
  const { ready } = props

  return (
    <div className="template-container">
      <TextArticle heading="bio" ready={ready}>
        <p>
          Straight from the very south of Argentina, Rio Grande, I grew up to
          become a <strong>COMPUTER GEEK</strong> (proudly). Since my childhood,
          I’ve been around computers and other small devices, like watches, as
          well.
        </p>
        <p>
          One may think that I would have become a developer rightaway, but
          eventually I started my college days as Musical Arts Student, and
          became a lover of Romantic piano composers like Franz Listz and
          Frederic Chopin. After experimenting with Jazz Piano, I played with a
          Jazz Quartet and on my own, until I later discovered that music,
          although my passion, wasn't something I wanted to live of.
        </p>
        <p>
          After a couple of years of experimenting, I went back to my roots and
          started studying <strong>Computer Programming</strong>, and finally
          found my vocation.
        </p>
        <p>
          In the present day, I like to focus all my time to{' '}
          <strong>delivering Great Experiences and Usable Products</strong>,
          that doesn’t only cover the mandatory guidelines, but also give an
          extra value to users, clients, designers and developers, through
          innovation. All of this couldn't be possible without ensuring an
          overall good quality of the project, I ensure it by using techniques
          like <strong>TDD</strong>.
        </p>
        <p>
          I strongly believe that a good work team is a team that shares
          knowledge, that is constantly involved in learning and teaching, and
          that's what I thrive for.
        </p>
        {/* <p>
          I'm also commited to accessiblity, I deeply believe in a <strong>Web accessible for all</strong>, without any kind of discrimination (conscious or not); with that in mind I carefully craft and test my projects for ensuring accessiblity.
        </p> */}
      </TextArticle>

      <ArticleLine heading="Education" entries={education} />

      <ArticleLine heading="Interests" entries={interests} theme="mono" />
    </div>
  )
}

const configObj = {
  topNavArrowLabel: 'Home',
  bottomNavArrowLabel: 'Skills',
  previousPage: '/',
  nextPage: '/skills',
  headingImg,
  headingAriaLabel: 'About'
}

export const AboutTesting = PageTemplate(About, configObj, true)

export default PageTemplate(About, configObj)
