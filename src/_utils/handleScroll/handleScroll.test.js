import {Reader} from 'monet'

import {
  getScreenPosition,
  collectData
} from './index'

describe('Handle Scroll', () => {
  describe('`getScreenPosition`', () => {
    const _DOC_HEIGHT = 3000

    test('should return string `top` when window position is on top', () => {
      expect(getScreenPosition(0, 200, _DOC_HEIGHT)).toBe('top')
    })

    test('should return string `bottom` when window position is on bottom', () => {
      expect(getScreenPosition(2200, _DOC_HEIGHT, _DOC_HEIGHT)).toBe('bottom')
    })

    test('should return string `middle` if neither on top nor on bottom', () => {
      expect(getScreenPosition(400, _DOC_HEIGHT - 400, _DOC_HEIGHT)).toBe('middle')
    })
  })

  describe('`collectData`', () => {
    const props = Reader('something')
    const windowData = {
      currentTopPosition: 0,
      currentBottomPosition: 800,
      previousTopPosition: 20
    }
    const docHeight = 8000

    test('should respect data structure of tuple', () => {
      expect(
        collectData(windowData, docHeight, props)
      ).toEqual([
        props, {
          position: 'top',
          direction: 'up'
        }
      ])
    })

  })
})
