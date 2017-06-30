// @flow

// import {primary} from '../../_const/_colors'

// DATA ________________________________________________________________________
import data from '../../_data/introduction'

// COMPONENTS __________________________________________________________________
import IntroEntry from './IntroEntry'

const Introduction = () => (
  <div className="introduction">
    {
      data.map((e, i) =>
        <IntroEntry key={i} data={e} first={i === 0} />
      )
    }
  </div>
)

export default Introduction
