// @flow
import React from 'react'

// ASSETS ______________________________________________________________________
// import './Skills.sass'
import heading from './_assets/heading.svg'

// ANIMATIONS __________________________________________________________________
import PopIn from '../../animations/PopIn'

// COMPONENTS __________________________________________________________________
import ArticleLine from '../../components/ArticleLine'
import NavArrow from '../../components/NavArrow'

class Skills extends React.Component {
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
      <main className="skills">
        <NavArrow direction="up" label="About" ready={titleAnimationEnd} />

        <header className="section-header about__header">
          <PopIn onRest={f => {this.setState({titleAnimationEnd: true})}}>
            <h1 className="section__heading"
              aria-label="About"
            >
              <img src={heading} alt="About" className="about__heading"/>
            </h1>
          </PopIn>
        </header>
      </main>
    )
  }
}

export default Skills
