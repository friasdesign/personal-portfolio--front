import React, {Component} from 'react'

import './Home.sass'
import glass from './mag-glass.svg'

// COMPONENTS __________________________________________________________________=
import Arrow from '../../components/Arrow'

// Define final text
const FIRST_LINE = 'carlos frias'
const SECOND_LINE = 'full-stack'
const THIRD_LINE = 'developer'

class Home extends Component {
  constructor(props) {
    super(props)

    this.firstLine = FIRST_LINE.split('')
    this.secondLine = SECOND_LINE.split('')
    this.thirdLine = THIRD_LINE.split('')

    this.state = {
      firstLine: 'I am',
      name: 'Carlos Frias',
      secondLine: 'full-stack',
      thirdLine: 'ux/ui',
      finishedTyping: false
    }

    this.typeCharArray = this.typeCharArray.bind(this)
  }

  componentDidMount() {
    // this.startTyping()
  }

  startTyping() {
    const {
      typeCharArray,
      firstLine,
      secondLine,
      thirdLine
    } = this

    // Type `.name`
    typeCharArray(firstLine, 'firstLine')
      // Type `.semi`
      .then(() => typeCharArray([';'], 'semiColon'))
      // Type `.job-title`
      .then(() => typeCharArray(secondLine, 'secondLine'))
      // Type `.developer`
      .then(() => typeCharArray(thirdLine, 'thirdLine'))
      // Finish typing
      .then(() => this.setState({finishedTyping: true}))
  }

  typeCharArray(charArray, property) {
    return new Promise((resolve) => {
      const length = charArray.length

      charArray.forEach((char, i) => {
        setTimeout(() => requestAnimationFrame(() => {
          this.setState({
            [property]: this.state[property] + char
          })
          // Resolve if finished
          if((i + 1) === length) resolve(true)
        }), (i + 1) * 100)
      })
    })
  }

  titleWithSub(title, subtitle, shorter, first) {
    return (
      <div className={`title-sub ${shorter ? 'title-sub--half' : ''}`}>
        {
          first
          ? (
            <p className="name">
              {this.state.firstLine}
              <span className="semi">{' ' + this.state.name}</span>
            </p>
          )
          : null
        }
        <p className="job-title">{title}</p>
        <span className={`job-sub ${shorter ? 'job-sub--shorter' : ''}`}>
          {subtitle}
        </span>
      </div>
    )
  }

  render() {
    const {
      secondLine,
      thirdLine,
      finishedTyping
    } = this.state
    // TODO: Check if Home is read by screen reader
    return (
      <section id="home" className="home-container">
        <div className={`home-content ${finishedTyping ? 'home-content--pic' : ''}`}>
          <h1 id="home__title" hidden>Home</h1>
          <div className="presentation">
            {
              this.titleWithSub(secondLine, 'developer', false, true)
            }
            {
              this.titleWithSub(thirdLine, 'designer', true)
            }
          </div>
          <div className="controls">
            <div className="search">
              <div className="mag-glass-container">
                <img src={glass} alt="Search" className="mag-glass"/>
              </div>
            </div>
            <Arrow />
          </div>
        </div>
      </section>
    )
  }
}

export default Home
