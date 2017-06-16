// @flow

import React from 'react'
import {Route} from 'react-router-dom'
import _ from 'ramda'
import {withRouter} from 'react-router'

// HELPERS
// _____________________________________________________________________________
import handleScroll from '../_utils/handleScroll'

// COMPONENTS
// _____________________________________________________________________________
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'

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
  setScreenTopPosition: () => void,
  location: Object,
  history: Object,
  screenTopPosition: number,
  idle: boolean,
  setIdle: () => void,
  nextPage: string,
  previousPage: string,
  triggerTransitionAnimation: () => void,
  inTransitionAnimation: [boolean, string],
  timer: number,
  setTimer: () => void,
  atTop: boolean,
  atBottom: boolean,
  isLast: boolean
}


// COMPONENT
// _____________________________________________________________________________
class App extends React.Component {
  props: AppProps

  componentDidMount() {
    // This represents the normal scroll flow.
    document.addEventListener('scroll', () => {
      handleScroll(this.props, false)
    })

    // This event is fired each time, altough it's processed by
    // `handleTransitionScroll` which is going to decide whether to perform a
    // Transition Scroll or fallback to a Normal Scroll flow.
    document.addEventListener('wheel', (e: Object) => {
      handleScroll(this.props, e.deltaY)
    })
  }

  atHome() {
    const currentLocation = this.props.location.pathname
    return /^\/$/.test(currentLocation)
  }

  render() {
    const atHome = this.atHome()
    return (
      <div className="App">
        <Navbar minimal={!atHome}/>

        <Filter atHome={atHome} type="top"/>
        <Filter atHome={atHome} type="bottom"/>

        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component={Contact}/>
      </div>
    )
  }
}

export default withRouter(App)
