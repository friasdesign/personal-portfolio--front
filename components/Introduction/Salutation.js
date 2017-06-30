// @flow
import {branch, renderNothing} from 'recompose'

// HELPERS _____________________________________________________________________
const checkIfNotFirst = ({first}: {first: boolean}) => !first
const renderOnlyIfFirst = branch(checkIfNotFirst, renderNothing)

// SALUTATION __________________________________________________________________
const Salutation = renderOnlyIfFirst(
  (props: {first: boolean}) => (
    <p className="name">
      Hi! I am {' '}<span className="semi">Carlos Frias</span>
    </p>
  )
)

export default Salutation
