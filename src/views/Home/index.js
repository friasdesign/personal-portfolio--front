import React, {Component} from 'react'

import './Home.sass'
import glass from './mag-glass.svg'

// COMPONENTS __________________________________________________________________=
import Arrow from '../../components/Arrow'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstLine: 'carlos frias',
      semiColon: ';',
      secondLine: 'full-stack',
      thirdLine: 'developer'
    }
  }

  render() {
    const {
      firstLine,
      semiColon,
      secondLine,
      thirdLine
    } = this.state
    // TODO: Check if Home is read by screen reader
    return (
      <section id="home" className="home-container">
        <h1 id="home__title" hidden>Home</h1>
        <div className="presentation">
          <p className="name">
            {firstLine}
            <span className="semi">{semiColon}</span>
          </p>
          <p className="job-title">{secondLine}</p>
          <p className="developer">{thirdLine}</p>
        </div>
        <div className="controls">
          <div className="search">
            <div className="mag-glass-container">
              <img src={glass} alt="Search" className="mag-glass"/>
            </div>
          </div>
          <Arrow />
        </div>
      </section>
    )
  }
}

export default Home
