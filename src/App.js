import React, { Component } from 'react';
import './App.css';

// COMPONENTS __________________________________________________________________
import Navbar from './components/Navbar'

// VIEWS _______________________________________________________________________
import Home from './views/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {
          // <Home />
        }
      </div>
    );
  }
}

export default App;
