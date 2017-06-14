// @flow

import React from 'react'
import {Route} from 'react-router-dom'
import _ from 'ramda'

// HELPERS
// _____________________________________________________________________________
import handleOnScroll from '../_utils/handleScroll.js'

// COMPONENTS
// _____________________________________________________________________________
import Navbar from '../components/Navbar'

// VIEWS
// _____________________________________________________________________________
import Home from '../views/Home'
import About from '../views/About'
import Skills from '../views/Skills'
import Portfolio from '../views/Portfolio'
import Contact from '../views/Contact'

// TYPES
// _____________________________________________________________________________
export type AppProps = {
  setOnTop: () => void,
  setOnBottom: () => void,
  setScreenBottomPosition: () => void,
  onBottom: boolean,
  idle: boolean,
  setIdle: () => void,
  onTop: boolean,
  timer: number,
  setTimer: () => void
}


// COMPONENT
// _____________________________________________________________________________
class App extends React.Component {
  props: AppProps

  componentDidMount() {
    document.addEventListener('scroll', () => {
      handleOnScroll(this.props)
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar minimal={true}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component={Contact}/>
      </div>
    )
  }
}

export default App
