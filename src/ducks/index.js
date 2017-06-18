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
  isPositionAtBottom,
  isPositionBeyondBottom,
  isPositionBeyondTop
} from '../_utils/helpers'

import {
  bodyGetHeight
} from '../_utils/functors/Body'

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

const TRIGGER_TRANSITION_ANIMATION = `${_NAMESPACE}/TRIGGER_TRANSITION_ANIMATION`
const END_TRANSITION_ANIMATION = `${_NAMESPACE}/END_TRANSITION_ANIMATION`

const SET_IS_LAST = `${_NAMESPACE}/SET_IS_LAST`

const SET_PREVIOUS_PAGE = `${_NAMESPACE}/SET_PREVIOUS_PAGE`
const SET_NEXT_PAGE = `${_NAMESPACE}/SET_NEXT_PAGE`

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

export function triggerTransitionAnimation(direction: string): Action {
  return {
    type: TRIGGER_TRANSITION_ANIMATION,
    payload: direction
  }
}

export function endTransitionAnimation(): Action {
  return {
    type: END_TRANSITION_ANIMATION,
    payload: ''
  }
}

export function setIsLast(value: boolean): Action {
  return {
    type: SET_IS_LAST,
    payload: value
  }
}

export function setPreviousPage(value: string): Action {
  return {
    type: SET_PREVIOUS_PAGE,
    payload: value
  }
}

export function setNextPage(value: string): Action {
  return {
    type: SET_NEXT_PAGE,
    payload: value
  }
}

// REDUCERS ____________________________________________________________________
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

function inTransitionAnimation(state=[false, ''], {type, payload}: Action): [boolean, string] {
  switch(type) {
    case TRIGGER_TRANSITION_ANIMATION:
      return [true, payload]
    case END_TRANSITION_ANIMATION:
      return [false, payload]
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

function isLast(state = false, {type, payload}: Action): boolean {
  switch(type) {
    case SET_IS_LAST:
      return payload
    default:
      return state
  }
}

function nextPage(state = '', {type, payload}: Action): string {
  switch(type) {
    case SET_NEXT_PAGE:
      return payload
    default:
      return state
  }
}

function previousPage(state = '', {type, payload}: Action): string {
  switch(type) {
    case SET_PREVIOUS_PAGE:
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
    isPositionAtTop(screenTopPosition) ||
    isPositionBeyondTop(screenTopPosition)
)

export const getAtBottom = createSelector(
  [getAtTop, getScreenBottomPosition],
  (atTop: boolean, screenBottomPosition: number): boolean => {
    const bodyHeight = bodyGetHeight.run()
    return atTop ? false
      : isPositionAtBottom(screenBottomPosition, bodyHeight) ||
        isPositionBeyondBottom(screenBottomPosition, bodyHeight)
  }
)

// COMBINE REDUCERS ____________________________________________________________
const reducers = combineReducers({
  screenTopPosition,
  inTransitionAnimation,
  idle,
  isLast,
  timer,
  previousPage,
  nextPage
})

// RETURN STORE ________________________________________________________________
export default createStore(reducers)
