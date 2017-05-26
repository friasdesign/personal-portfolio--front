import {connect} from 'react-redux'

// COMPONENT ___________________________________________________________________
import Filter from './Filter'

// MAP STATE TO PROPS __________________________________________________________
function mapStateToProps({onTop, onBottom}) {
  return {
    onTop,
    onBottom
  }
}

// DEFINE CONTAINER ____________________________________________________________
const FilterContainer = connect(
  mapStateToProps
)(Filter)

export default FilterContainer
