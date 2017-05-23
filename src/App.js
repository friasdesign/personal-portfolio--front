import React, { Component } from 'react';
import './App.css';

// COMPONENTS __________________________________________________________________
import Navbar from './components/Navbar'

// VIEWS _______________________________________________________________________
// import Home from './views/Home'
import About from './views/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {
          //<Home />
        }
        <About/>
      </div>
    );
  }
}

export default App;
