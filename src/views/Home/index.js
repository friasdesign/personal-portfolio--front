// @flow
import {connect} from 'react-redux'

// ACTION CREATORS _____________________________________________________________
import {
  setNextPage,
} from '../../ducks'

// COMPONENT ___________________________________________________________________
import Home from './Home'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps(state: Object): Object {
  const {inTransitionAnimation} = state
  return {
    inTransitionAnimation,
  }
}

// DEFINE CONTAINER ____________________________________________________________
const HomeContainer = connect(
  mapStateToProps, {
    setNextPage,
  }
)(Home)

export default HomeContainer
