// @flow

import React from 'react';
import './App.css';

// HELPERS _____________________________________________________________________
import {compose} from 'redux'

// COMPONENTS __________________________________________________________________
import Navbar from './components/Navbar'

// VIEWS _______________________________________________________________________
// import Home from './views/Home'
import About from './views/About'

// TYPES _______________________________________________________________________
type Props = any

// COMPONENT ___________________________________________________________________
class App extends React.Component {
  props: Props
  handleOnScroll: Function

  constructor(props: Props) {
    super(props)

    this.handleOnScroll = compose(
      this.checkIfOnBottom,
      this.checkIfOnTop,
      this.getWindowPosition
    )
  }

  getWindowPosition() {
    return window.scrollY
  }

  checkIfOnTop(position: number) {
    if(position <= 0) console.log('onTop')
    return position
  }

  checkIfOnBottom(position: number) {
    console.log('Called `checkIfOnBottom`', position)
    return position
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleOnScroll.bind(this))
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

export default App;
