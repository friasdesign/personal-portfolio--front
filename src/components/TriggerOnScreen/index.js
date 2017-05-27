// @flow
/*
This HOC will add animation when first appeared on screen for the component that
has been passed.

This HOC does:

- calculate whether component is within the screen
- trigger the animation passed in
- renders with corresponding styles
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
