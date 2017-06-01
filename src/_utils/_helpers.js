import _ from 'ramda'

export const run = _.curry((monad, value) => monad.run(value))

export const log = _.curry((label, value) => {
  console.log(label, value)
  return value
})
