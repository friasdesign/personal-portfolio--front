// @flow
import React from 'react'

// TYPES _______________________________________________________________________
import type {ReactChildren} from 'react-flow-types'

type ResetOnPageChangeProps = {
  setMenuOpen: (boolean) => void,
  setAtHome: (boolean) => void,
  location: Object,
  children: ReactChildren
}

class ResetOnPageChange extends React.Component {
  props: ResetOnPageChangeProps

  atHome() {
    const currentLocation = this.props.location.pathname
    return /^\/$/.test(currentLocation)
  }

  componentDidUpdate(prevProps: Object) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
      this.props.setMenuOpen(false)
      this.props.setAtHome(this.atHome())
    }
  }

  componentDidMount() {
    this.props.setAtHome(this.atHome())
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

export default ResetOnPageChange
