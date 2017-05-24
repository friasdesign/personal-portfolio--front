// @flow

import React from 'react'

// ASSETS ______________________________________________________________________
import './About.sass'
import heading from './_assets/heading.svg'

// COMPONENTS __________________________________________________________________
import ArticleLine from '../../components/ArticleLine'
import Filter from '../../components/Filter'

// DATA ________________________________________________________________________
import {education, interests} from './_data'

const About = (props: any) => (
  <main className="about">
    <Filter type="top"/>
    <Filter type="bottom"/>
    <header className="section-header about__header">
      <h1 className="section__heading"
        aria-label="About"
      >
        <img src={heading} alt="About" className="about__heading"/>
      </h1>
    </header>
    <article className="bio">
      <h2 className="article-heading">Bio</h2>
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
    </article>
    <ArticleLine
      heading="Education"
      entries={education}
    />
    <ArticleLine
      heading="Interests"
      entries={interests}
    />
  </main>
)

export default About
