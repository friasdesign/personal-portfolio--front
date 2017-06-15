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
const SET_SCREEN_TOP_POSITION = `${_NAMESPACE}/SET_SCREEN_TOP_POSITION`

const SET_IDLE = `${_NAMESPACE}/SET_IDLE`
const SET_TIMER = `${_NAMESPACE}/SET_TIMER`

// ACTION CREATORS _____________________________________________________________

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
  setScreenTopPosition,
  idle,
  timer
})

// RETURN STORE ________________________________________________________________
export default createStore(reducers)
