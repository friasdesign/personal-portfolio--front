import React, {Component} from 'react'
import {Motion, spring, presets} from 'react-motion'

import './Home.sass'
import glass from './mag-glass.svg'

// COMPONENTS __________________________________________________________________=
import Arrow from '../../components/Arrow'

// Define final text
const FIRST_LINE = 'I am'
const NAME = 'Carlos Frias'
const SECOND_LINE = 'full-stack'
const THIRD_LINE = 'ux/ui'

class Home extends Component {
  constructor(props) {
    super(props)

    this.firstLine = FIRST_LINE.split('')
    this.name = NAME.split('')
    this.secondLine = SECOND_LINE.split('')
    this.thirdLine = THIRD_LINE.split('')

    this.state = {
      firstLine: '',
      name: '',
      secondLine: '',
      thirdLine: '',
      finishedTyping: false,
      developer: false,
      designer: false
    }

    this.typeCharArray = this.typeCharArray.bind(this)
    this.displaySub = this.displaySub.bind(this)
  }

  componentDidMount() {
    this.startTyping()
  }

  startTyping() {
    const {
      typeCharArray,
      displaySub,
      firstLine,
      name,
      secondLine,
      thirdLine
    } = this

    // Type `.name`
    typeCharArray(firstLine, 'firstLine')
      // Type `.semi`
      .then(() => typeCharArray(name, 'name'))
      // Type 'FULL-STACK'
      .then(() => typeCharArray(secondLine, 'secondLine'))
      // Trigger 'developer' animation
      .then(() => displaySub('developer'))
      // Type 'UX/UI'
      .then(() => typeCharArray(thirdLine, 'thirdLine'))
      // Trigger 'designer' animation
      .then(() => displaySub('designer'))
      // Finish typing
      .then(() => this.setState({finishedTyping: true}))
  }

  displaySub(property) {
    return new Promise((resolve, reject) => {
      this.setState({
        [property]: true
      })
      setTimeout(() => resolve(), 800)
    })
  }

  typeCharArray(charArray, property) {
    return new Promise((resolve) => {
      const length = charArray.length

      charArray.forEach((char, i) => {
        const final = (i + 1) === length
        setTimeout(() => requestAnimationFrame(() => {
          this.setState({
            [property]: this.state[property] + char,
          })
          // Resolve if finished
          if(final) resolve(true)
        }), (i + 1) * 120)
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
        {
          this.state[subtitle]
          ? (
            <Motion
              defaultStyle={{s: 0.6, o: 0}}
              style={{s: spring(1, presets.wobbly), o: spring(1)}}
            >
              {
                ({s, o}) => (
                  <span style={{
                      opacity: o,
                      transform: `scale(${s}, ${s})`
                    }} className={`job-sub ${shorter ? 'job-sub--shorter' : ''}`}>
                    {subtitle}
                  </span>
                )
              }
            </Motion>
          )
          : null
        }
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
            {
              finishedTyping
              ? (<Arrow />)
              : null
            }
          </div>
        </div>
      </section>
    )
  }
}

export default Home
