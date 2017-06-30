// @flow
import {flattenProp} from 'recompose'

import * as colors from '../../_const/_colors'
import {
  forTabletPortraitOnly,
  forPhoneOnly
} from '../../_const/_breakpoints'

import Salutation from './Salutation'

// TYPES _______________________________________________________________________
type IntroEntryProps = {|
  title: string,
  subtitle: string,
  first: boolean
|}

console.log(forPhoneOnly)

// INTRO ENTRY _________________________________________________________________
const IntroEntry = ({title, subtitle, first}: IntroEntryProps) => (
  <div className="title-sub">
    <Salutation first={first} />
    <p className="job-title">{title}</p>
    <span className="job-sub">
      {subtitle}
    </span>

    <style jsx>{`
      .title-sub {
        color: ${colors.$white};
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      .title-sub:last-child {
        margin-top: 3.272rem;
      }

      .job-title {
        font-size: 3.272rem;
        font-weight: 900;
        margin-top: 0;
        margin-bottom: 0;
        text-transform: uppercase;
        line-height: 1;
        max-width: none !important;
      }

      .job-sub {
        font-size: 1.618rem;
      }

      .job-sub::before {
        content: '';
        height: .5rem;
        width: 8.567rem;
        display: inline-block;
        border-top: 1px ${colors.$primary} solid;
        margin-right: 1rem;
      }

      .job-sub--shorter::before {
        width: 1.618rem;
      }

      @media screen and (min-width: 599px) {
        :global(body) {
          background-color: #000;
        }
      }

    `}</style>
  </div>
)

export default flattenProp('data')(IntroEntry)
