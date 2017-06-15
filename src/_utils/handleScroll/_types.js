// @flow
import {Reader} from 'monet'

export type WindowData = {
  currentTopPosition: number,
  currentBottomPosition: number,
  previousTopPosition: number
}

export type PipedData = [
  [string, string],
  typeof Reader
]
