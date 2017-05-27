// @flow
/*
HOC that checks whether the child component is on the screen or has been on the screen
and sets trigger on state to true, passing down `state.triggered` down as prop.

Used to animate or to trigger any similar kind of bheavior expected to happen
once user scrolls over the component.
 */
import React from 'react'

// IMPORT TYPES ________________________________________________________________
import type {
  Component,
  ReactChildren
} from 'react-flow-types'

type Props = {
  children?: ReactChildren
}

// FUNCTION DEFINITION _________________________________________________________
function triggerOnScreen(
  WrappedComponent: Component<any>
) {
  // COMPONENT _________________________________________________________________
  return class extends React.Component {
    props: Props

    state: {
      triggered: boolean
    }

    static defaultProps = {
      onRest: f => {}
    }

    constructor(props: Props) {
      super(props)
      this.state = {
        triggered: false
      }
    }

    render() {
      const {
        triggered
      } = this.state

      return (
        <WrappedComponent triggered={triggered} {...this.props}/>
      )
    }
  }
}

export default triggerOnScreen
