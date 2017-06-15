// @flow

import React from 'react'
import {Route} from 'react-router-dom'
import _ from 'ramda'

// HELPERS
// _____________________________________________________________________________
import handleOnScroll from '../_utils/handleScroll'
import {
  checkIfiOS
} from '../_utils/helpers'

// FUNCTORS ____________________________________________________________________
import {
  windowSet_IN_IOS
} from '../_utils/functors/Window'

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
  screenTopPosition: number,
  setScreenTopPosition: () => void,
  idle: boolean,
  setIdle: () => void,
  nextPage: string,
  previousPage: string,
  triggerTransitionAnimation: () => void,
  lastTopPosition: number,
  timer: number,
  setTimer: () => void
}


// COMPONENT
// _____________________________________________________________________________
class App extends React.Component {
  props: AppProps

  componentDidMount() {
    // Here we actually set whether the user is accessing the site using an iOS
    // device, there are some inconsistencies with window.innerHeight in iOS devices,
    // thus, we use screen.height instead.
    windowSet_IN_IOS(checkIfiOS(window, navigator)).run()

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
