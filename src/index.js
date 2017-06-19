import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

// ASSETS ______________________________________________________________________
import './_assets/normalize.css'
import './index.sass'

// STORE _______________________________________________________________________
import store from './ducks'

// COMPONENTS __________________________________________________________________
import ResetOnPageChange from './components/ResetOnPageChange'

// APPLICATION _________________________________________________________________
import App from './App'

// RENDER DOM __________________________________________________________________
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ResetOnPageChange>
        <App/>
      </ResetOnPageChange>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
