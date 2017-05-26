import _ from 'ramda'

// UTIL FUNCTIONS ______________________________________________________________
const checkIfOnTop = _.curry((props: Object, position: number) => {
  console.log('called here!', props.onTop)
  if(position <= 10) props.setOnTop(true)
  else if(props.onTop) {
    props.setOnTop(false)
  }
  return position
})

const checkIfOnBottom = _.curry((props: Object, position: number) => {
  console.log('Called `checkIfOnBottom`', position)
  return position
})

function getWindowPosition() {
  return window.scrollY
}

export default function handleOnScroll(props) {
  return _.compose(
    checkIfOnBottom(props),
    checkIfOnTop(props),
    getWindowPosition
  )
}
