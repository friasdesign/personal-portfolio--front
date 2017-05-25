// @flow
/*
This file:
- Exports store
- compiles all reducers from views and components
- holds action creators and actions that are relative to the application level
*/
import {combineReducers} from 'redux'
import createStore from './_store'

// TYPES _______________________________________________________________________
import type {
  Action
} from './_types'

// CONSTANTS ___________________________________________________________________
const _NAMESPACE = 'personal-portfolio/'

// ACTION TYPES ________________________________________________________________
const SET_ON_TOP = `${_NAMESPACE}/SET_ON_TOP`
const SET_ON_BOTTOM = `${_NAMESPACE}/SET_ON_BOTTOM`
const SET_SCREEN_BOTTOM_POSITION = `${_NAMESPACE}/SET_SCREEN_BOTTOM_POSITION`

// ACTION CREATORS _____________________________________________________________
export function setOnTop(value: boolean): Action {
  return {
    type: SET_ON_TOP,
    payload: value
  }
}

export function setOnBottom(value: boolean): Action {
  return {
    type: SET_ON_BOTTOM,
    payload: value
  }
}

export function setScreenBottomPosition(value: boolean): Action {
  return {
    type: SET_SCREEN_BOTTOM_POSITION,
    payload: value
  }
}

// REDUCERS ____________________________________________________________________
/**
 * Tells whether the screen is on top of the page or not. Useful to:
 * - Remove top filter when on top
 * - Tell NavArrow animation when to trigger
 *
 * @param  {Boolean} [state=true] Actual value from Redux State
 * @param  {String}  type         Type of Redux Action triggered
 * @param  {Any}  payload      New Value from payload of action
 * @return {Boolean}               The new value for this entry in the Redux State
 */
function onTop(state = true, {type, payload}: Action): boolean {
  switch(type) {
    case SET_ON_TOP:
      return payload
    default:
      return state
  }
}

function onBottom(state = false, {type, payload}: Action): boolean {
  switch (type) {
    case SET_ON_BOTTOM:
      return payload
    default:
      return state
  }
}

function screenBottomPosition(state = 0, {type, payload}: Action): number {
  switch(type) {
    case SET_SCREEN_BOTTOM_POSITION:
      return payload
    default:
      return state
  }
}

// COMBINE REDUCERS ____________________________________________________________
const reducers = combineReducers({
  onTop,
  onBottom,
  screenBottomPosition
})

// RETURN STORE ________________________________________________________________
export default createStore(reducers)
