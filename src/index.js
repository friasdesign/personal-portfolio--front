import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

// ASSETS ______________________________________________________________________
import './assets/normalize.css'
import './index.sass'

// STORE _______________________________________________________________________
import store from './ducks'

// APPLICATION _________________________________________________________________
import App from './App'

// RENDER DOM __________________________________________________________________
ReactDOM.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('root')
);
