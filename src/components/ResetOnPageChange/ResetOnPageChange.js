// @flow
import React from 'react'

// TYPES _______________________________________________________________________
type ResetOnPageChangeProps = {
  setMenuOpen: (boolean) => void,
  location: Object
}

class ResetOnPageChange extends React.Component {
  props: ResetOnPageChangeProps

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      console.log('changed')
      window.scrollTo(0, 0)
      this.props.setMenuOpen(false)
    }
  }

  render() {
    return this.props.children
  }
}

export default ResetOnPageChange
