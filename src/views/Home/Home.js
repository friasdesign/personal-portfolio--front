// @flow
import React, {Component} from 'react'
import {Motion, spring, presets} from 'react-motion'

import './Home.sass'

// COMPONENTS __________________________________________________________________
import Arrow from '../../components/Arrow'

// ANIMATIONS __________________________________________________________________
import FadeIn from '../../animations/FadeIn'

// Define final text
const FIRST_LINE = 'I am'
const NAME = 'Carlos Frias'
const SECOND_LINE = 'full-stack'
const THIRD_LINE = 'ux/ui'

// TYPES _______________________________________________________________________
type HomeProps = {
  setNextPage: (string) => void,
  inTransitionAnimation: [boolean, string]
}

type HomeState = {
  firstLine: string,
  name: string,
  secondLine: string,
  thirdLine: string,
  finishedTyping: boolean,
  startedTyping: boolean,
  developer: boolean,
  designer: boolean,
  ready: boolean
}

class Home extends Component {
  props: HomeProps
  state: HomeState

  firstLine: Array<string>
  secondLine: Array<string>
  name: Array<string>
  thirdLine: Array<string>
  typeCharArray: (Array<string>, string) => Promise<any>
  displaySub: (string) => Promise<any>

  constructor(props: HomeProps) {
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
      startedTyping: false,
      developer: false,
      designer: false,
      ready: false
    }

    this.typeCharArray = this.typeCharArray.bind(this)
    this.displaySub = this.displaySub.bind(this)
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

  displaySub(property: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.setState({
        [property]: true
      })
      setTimeout(() => resolve(), 800)
    })
  }

  typeCharArray(charArray: Array<string>, property: string): Promise<any> {
    return new Promise((resolve) => {
      const length = charArray.length

      charArray.forEach((char, i) => {
        const final = (i + 1) === length
        setTimeout(() => requestAnimationFrame(() => {
          this.setState({
            [property]: this.state[property] + char,
            startedTyping: true
          })
          // Resolve if finished
          if(final) resolve(true)
        }), (i + 1) * 120)
      })
    })
  }

  componentDidUpdate() {
    const {ready, startedTyping} = this.state
    if(ready && !startedTyping) this.startTyping()
  }

  titleWithSub(title: string, subtitle: string, shorter: boolean, first: boolean = false) {
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

  mountChildren() {
    const {
      secondLine,
      thirdLine,
      finishedTyping
    } = this.state

    // TODO: Check if Home is read by screen reader
    return (
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
            {
              finishedTyping
              ? (<Arrow link="/about" />)
              : null
            }
          </div>
        </div>
    )
  }

  componentDidMount() {
    this.props.setNextPage('/about')
  }

  render() {
    const {ready} = this.state
    const {inTransitionAnimation} = this.props
    return(
      <FadeIn
        onRest={() => {this.setState({ready: true})}}
      >
        <section id="home" className={`home-container ${
            inTransitionAnimation[0]
              ? 'home-container--transition'
              : ''
          }`}>
          <div className="curtain">
            {
              ready
              ? this.mountChildren()
              : null
            }
          </div>
        </section>
      </FadeIn>
    )
  }
}

export default Home
