// @flow

import React from 'react'

// ASSETS ______________________________________________________________________
import './About.sass'
import heading from './_assets/heading.svg'

// ANIMATIONS __________________________________________________________________
import PopIn from '../../animations/PopIn'

// COMPONENTS __________________________________________________________________
import ArticleLine from '../../components/ArticleLine'
import Filter from '../../components/Filter'
import NavArrow from '../../components/NavArrow'

// DATA ________________________________________________________________________
import {education, interests} from './_data'

// COMPONENT DEFINITION ________________________________________________________
class About extends React.Component {
  state: {
    titleAnimationEnd: boolean
  }

  constructor(props: Object) {
    super(props)

    this.state = {
      titleAnimationEnd: false
    }
  }

  render() {
    const {titleAnimationEnd} = this.state
    return (
      <main className="about">
        <NavArrow direction="up" label="Home"/>

        <Filter type="top"/>
        <Filter type="bottom"/>

        <header className="section-header about__header">
          <PopIn onRest={f => {this.setState({titleAnimationEnd: true})}}>
            <h1 className="section__heading"
              aria-label="About"
            >
              <img src={heading} alt="About" className="about__heading"/>
            </h1>
          </PopIn>
        </header>

        <article className="bio">
          <h2 className={`article-heading fade-side ${
              titleAnimationEnd
              ? ''
              : 'fade-left'
            }`}>Bio</h2>
          <div className={`article-text fade-side ${
              titleAnimationEnd
              ? ''
              : 'fade-right'
            }`}>
            <p>
              Straight from the very south of Argentina, Rio Grande, I grew up to become a <strong>COMPUTER GEEK</strong> (proudly). Since my childhood, I’ve been around computers and other small devices, like watches, as well.
            </p>
            <p>
              One may think that I would have become a developer rightaway, but eventually I started my college days as Musical Arts Student, and became a lover of Romantic piano composers like Franz Listz and Frederic Chopin. After experimenting with Jazz Piano, I played with a Jazz Quartet and on my own, until I later discovered that music, although my passion, wasn't something I wanted to live of.
            </p>
            <p>
              After a couple of years of experimenting, I went back to my roots and started studying <strong>Computer Programming</strong>, and finally found my vocation. Having a background on Arts motivated me to experiment with <strong>Graphic Design</strong> as well, that way I landed into <strong>UX/UI Design</strong>, which is a core aspect of my life alongside <strong>Full-stack Development</strong>.
            </p>
            <p>
              In the present day, I want to focus all my time to <strong>deliver Great Experiences and Usable Products</strong>, that doesn’t only cover the mandatory guidelines, but also give an extra value to users, clients, designers and developers, through innovation.
            </p>
            <p>
              I'm also commited to accessiblity, I deeply believe in a <strong>Web accessible for all</strong>, without any kind of discrimination (conscious or not); with that in mind I carefully craft and test my projects for ensuring accessiblity.
            </p>
          </div>
        </article>

        <ArticleLine
          heading="Education"
          entries={education}
        />

        <ArticleLine
          heading="Interests"
          entries={interests}
        />

        <NavArrow direction="down" label="Skills"/>
      </main>
    )
  }
}

export default About
