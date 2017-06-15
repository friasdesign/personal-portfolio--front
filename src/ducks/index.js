// @flow
/*
This file:
- Exports store
- compiles all reducers from views and components
- holds action creators and actions that are relative to the application level
*/
import {combineReducers} from 'redux'
import {createSelector} from 'reselect'
import createStore from './_store'

// HELPER FUNCTIONS ____________________________________________________________
import {
  getScreenBottom,
  isPositionAtTop,
  isPositionAtBottom
} from '../_utils/helpers'

// TYPES _______________________________________________________________________
import type {
  Action
} from './_types'

// CONSTANTS ___________________________________________________________________
const _NAMESPACE = 'personal-portfolio'

// ACTION TYPES ________________________________________________________________
// const SET_ON_TOP = `${_NAMESPACE}/SET_ON_TOP`
// const SET_ON_BOTTOM = `${_NAMESPACE}/SET_ON_BOTTOM`
// const SET_SCREEN_BOTTOM_POSITION = `${_NAMESPACE}/SET_SCREEN_BOTTOM_POSITION`
const SET_SCREEN_TOP_POSITION = `${_NAMESPACE}/SET_SCREEN_TOP_POSITION`

const SET_IDLE = `${_NAMESPACE}/SET_IDLE`
const SET_TIMER = `${_NAMESPACE}/SET_TIMER`

// ACTION CREATORS _____________________________________________________________
// export function setOnTop(value: boolean): Action {
//   return {
//     type: SET_ON_TOP,
//     payload: value
//   }
// }
//
// export function setOnBottom(value: boolean): Action {
//   return {
//     type: SET_ON_BOTTOM,
//     payload: value
//   }
// }
//
// export function setScreenBottomPosition(value: boolean): Action {
//   return {
//     type: SET_SCREEN_BOTTOM_POSITION,
//     payload: value
//   }
// }

export function setScreenTopPosition(value: number): Action {
  return {
    type: SET_SCREEN_TOP_POSITION,
    payload: value
  }
}

export function setIdle(value: boolean): Action {
  return {
    type: SET_IDLE,
    payload: value
  }
}

export function setTimer(value: boolean): Action {
  return {
    type: SET_TIMER,
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
// function onTop(state = true, {type, payload}: Action): boolean {
//   switch(type) {
//     case SET_ON_TOP:
//       return payload
//     default:
//       return state
//   }
// }
//
// function onBottom(state = false, {type, payload}: Action): boolean {
//   switch (type) {
//     case SET_ON_BOTTOM:
//       return payload
//     default:
//       return state
//   }
// }
//
// function screenBottomPosition(state = 0, {type, payload}: Action): number {
//   switch(type) {
//     case SET_SCREEN_BOTTOM_POSITION:
//       return payload
//     default:
//       return state
//   }
// }

function screenTopPosition(state = 0, {type, payload}: Action): number {
  switch(type) {
    case SET_SCREEN_TOP_POSITION:
      return payload
    default:
      return state
  }
}

function idle(state = true, {type, payload}: Action): boolean {
  switch(type) {
    case SET_IDLE:
      return payload
    default:
      return state
  }
}

/**
 * Holds the ID of the currently active timer that checks whether the user
 * is idle or not, the value of `-1` is used to note that no timer is set.
 * @param  {Number} [state=-1] The id of the currently active timer or -1 of none.
 * @param  {String} type       String that describes the action type for Redux.
 * @param  {Any} payload    The payload of the action
 * @return {Number}            The new value of the action is the corrent or the current value.
 */
function timer(state = -1, {type, payload}: Action): number {
  switch(type) {
    case SET_TIMER:
      return payload
    default:
      return state
  }
}

// SELECTORS ___________________________________________________________________
export const getScreenBottomPosition = createSelector(
  [(state: Object): number => state.screenTopPosition],
  (screenTopPosition: number): number => getScreenBottom(screenTopPosition)
)

export const getAtTop = createSelector(
  [(state: Object): number => state.screenTopPosition],
  (screenTopPosition: number): boolean =>
    isPositionAtTop(screenTopPosition)
)

export const getAtBottom = createSelector(
  [(state: Object): number => state.screenTopPosition],
  (screenTopPosition: number): boolean =>
    isPositionAtBottom(screenTopPosition)
)

// COMBINE REDUCERS ____________________________________________________________
const reducers = combineReducers({
  // onTop,
  // onBottom,
  // screenBottomPosition,
  setScreenTopPosition,
  idle,
  timer
})

// RETURN STORE ________________________________________________________________
export default createStore(reducers)
