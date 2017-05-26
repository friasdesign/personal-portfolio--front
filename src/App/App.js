// @flow

import React from 'react';
import './App.css';

// HELPERS
// _____________________________________________________________________________
import _ from 'ramda'
import handleOnScroll from '../_utils/_handleScroll.js'

// COMPONENTS
// _____________________________________________________________________________
import Navbar from '../components/Navbar'

// VIEWS
// _____________________________________________________________________________
// import Home from './views/Home'
import About from '../views/About'

// TYPES
// _____________________________________________________________________________
type Props = {
  setOnTop: () => void,
  onTop: boolean
}


// COMPONENT
// _____________________________________________________________________________
class App extends React.Component {
  props: Props

  componentDidMount() {
    document.addEventListener('scroll', () => {
      handleOnScroll(this.props)()
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar minimal={true}/>
        {
          //<Home />
        }
        <About/>
      </div>
    )
  }
}

export default App
