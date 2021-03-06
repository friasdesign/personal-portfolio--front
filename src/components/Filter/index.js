import {connect} from 'react-redux'

// SELECTORS ___________________________________________________________________
import {
  getAtTop,
  getAtBottom
} from '../../ducks'

// COMPONENT ___________________________________________________________________
import Filter from './Filter'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps(state) {
  return {
    atTop: getAtTop(state),
    atBottom: getAtBottom(state)
  }
}

// DEFINE CONTAINER ____________________________________________________________
const FilterContainer = connect(
  mapStateToProps
)(Filter)

export default FilterContainer
