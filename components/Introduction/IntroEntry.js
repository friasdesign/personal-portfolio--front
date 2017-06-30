// @flow
import {flattenProp, branch, renderNothing} from 'recompose'

// TYPES _______________________________________________________________________
type IntroEntryProps = {|
  title: string,
  subtitle: string,
  first: boolean
|}

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

// INTRO ENTRY _________________________________________________________________
const IntroEntry = ({title, subtitle, first}: IntroEntryProps) => (
  <div className="title-sub">
    <Salutation first={first} />
    <p className="job-title">{title}</p>
    <span className="job-sub">
      {subtitle}
    </span>
  </div>
)

export default flattenProp('data')(IntroEntry)
