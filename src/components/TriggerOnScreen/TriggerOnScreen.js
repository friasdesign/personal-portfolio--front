// @flow
/*
HOC that checks whether the child component is on the screen or has been on the screen
and sets trigger on state to true, passing down `state.triggered` down as prop.

Used to animate or to trigger any similar kind of bheavior expected to happen
once user scrolls over the component.
 */
import React from 'react'
import _ from 'ramda'

// IMPORT TYPES ________________________________________________________________
import type {
  Component
} from 'react-flow-types'

type Props = {
  screenBottomPosition: number
}

// UTIL FUNCTIONS ______________________________________________________________
function getElementTopPosition(elem) {
  return elem.getBoundingClientRect().top
}

// FUNCTION DEFINITION _________________________________________________________
function triggerOnScreen(
  WrappedComponent: Component<Object>
) {
  // COMPONENT _________________________________________________________________
  return class TriggerOnScreen extends React.Component {
    props: Props

    state: {
      triggered: boolean
    }

    topPosition: number

    static defaultProps = {
      onRest: f => {}
    }

    constructor(props: Props) {
      super(props)
      this.state = {
        triggered: false
      }
    }

    setTopPosition(element: Object) {
      this.topPosition = getElementTopPosition(element)
    }

    shouldComponentUpdate(nextProps: Object, nextState: Object) {
      return !_.equals(nextProps, this.props) || !_.equals(nextState, this.state)
    }

    render() {
      const {
        triggered
      } = this.state

      return (
        <WrappedComponent setTopPosition={this.setTopPosition.bind(this)}
          triggered={triggered} {...this.props}/>
      )
    }
  }
}

export default triggerOnScreen
