/* global process.env */

import {createStore, applyMiddleware, compose} from 'redux'

const _PRODUCTION_ = process.env.NODE_ENV === 'production'

// CREATE STORE UTILITIES ______________________________________________________

function create_store_with_middlewares(rootReducer, preloadedState, middlewares) {
  // TODO: call single applyMiddleware function
  // var mappedMiddleWares = middlewares.map((middleware) => applyMiddleware(middleware))

  if(_PRODUCTION_) return createStore(rootReducer, preloadedState, compose(applyMiddleware(...middlewares)))

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(...middlewares)))
}

function create_basic_store(rootReducer, preloadedState) {
  if(_PRODUCTION_) return createStore(rootReducer, preloadedState)
  else return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

/**
 * Creates a new store with added redux dev tools functionality
 * as long as the application is not compiled in PRODUCTION mode.
 * @param  {function} rootReducer        Root reducer of the application
 * @param  {object} preloadedState     Preloaded state if existing
 * @param  {array} middlewares        Array of redux middlewares the app needs to run
 * @return {Store}                    A new shiny store
 */
export default function create_store_with_dev_tools(
  rootReducer,
  preloadedState,
  middlewares) {

  if(middlewares) return create_store_with_middlewares(rootReducer, preloadedState, middlewares)
  else return create_basic_store(rootReducer, preloadedState)
}

// <-- CREATE STORE UTILITIES ___________________
