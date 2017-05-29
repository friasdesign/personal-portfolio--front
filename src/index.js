import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

// ASSETS ______________________________________________________________________
import './assets/normalize.css'
import './index.sass'

// STORE _______________________________________________________________________
import store from './ducks'

// APPLICATION _________________________________________________________________
import App from './App'

// RENDER DOM __________________________________________________________________
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
