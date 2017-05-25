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
  onRest: () => void,
  children: ReactChildren
}

// FUNCTION DEFINITION _________________________________________________________
function AnimateOnScreen(
  WrappedComponent: Component<any>,
  Animation: Component<any>
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

    componentDidMount() {
      console.log(this.refs._target)
    }

    render() {
      const {
        onRest
      } = this.props

      return (
        <Animation onRest={onRest}>
          <WrappedComponent ref="_target"/>
        </Animation>
      )
    }
  }
}

export default AnimateOnScreen
