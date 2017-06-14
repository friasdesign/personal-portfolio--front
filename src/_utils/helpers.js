import _ from 'ramda'

export const run = _.curry((monad, value) => monad.run(value))

export const log = _.curry((label, value) => {
  console.log(label, value)
  return value
})

export const checkIfiOS = _.curry((win: {MSStream: any}, nav: {userAgent: string}) => {
  return /iPad|iPhone|iPod/.test(nav.userAgent) && !win.MSStream
})

// isPositionOnTop :: number a -> boolean b
export const isPositionAtTop = (winTopPosition: number): boolean => winTopPosition <= 50

// isPositionOnBottom :: number a -> number b -> boolean c
export const isPositionAtBottom = _.curry(
  (winBottomPosition: number, docHeight: number): boolean =>
    winBottomPosition >= (docHeight - 70)
)

// isPositionInMiddle :: number a -> number b -> number c -> boolean d
export const isPositionInMiddle = _.curry(
  (winTopPosition: number, winBottomPosition: number, docHeight: number): boolean =>
    !(isPositionAtTop(winTopPosition) ||
      isPositionAtBottom(winBottomPosition, docHeight)
    )
)
