// @flow

import React from 'react'
import {Route} from 'react-router-dom'

// ASSETS ______________________________________________________________________
import './App.css'

// HELPERS
// _____________________________________________________________________________
import _ from 'ramda'
import handleOnScroll from '../_utils/_handleScroll.js'

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
  onTop: boolean
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
