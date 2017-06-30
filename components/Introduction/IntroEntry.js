// @flow
import {flattenProp} from 'recompose'

import * as colors from '../../_const/_colors'
import {
  forTabletPortraitOnly,
  forTabletLandscapeUp,
  forDesktopUp,
  forBigDesktopUp
} from '../../_const/_breakpoints'

import Salutation from './Salutation'

// TYPES _______________________________________________________________________
type IntroEntryProps = {|
  title: string,
  subtitle: string,
  first: boolean
|}

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

      @media ${forTabletPortraitOnly} {
        .job-title {
          font-size: 5.295rem;
        }
        .job-sub {
          font-size: 2.023rem;
        }
        .job-sub::before {
          width: 17.942rem;
        }
        .job-sub--shorter::before {
          width: 5.295rem;
        }
      }

      @media ${forTabletLandscapeUp} {
        .job-title {
          font-size: 5.295rem
        }
        .job-sub {
          font-size: 2.023rem
        }
        .job-sub::before {
          width: 17.942rem
        }
        .job-sub--shorter::before {
          width: 5.295rem
        }
      }

      @media ${forDesktopUp} {
        .title-sub {
          width: 100%
        }
        .title-sub--half {
          width: 75%
        }
        .job-title {
          font-size: 5.295rem
          align-self: flex-start
        }
        .job-sub {
          font-size: 2.618rem
        }
        .job-sub--shorter::before {
          width: 11.089rem
        }
      }

      @media ${forBigDesktopUp} {
        .job-title {
          font-size: 6.854rem
        }
        .job-sub {
          font-size: 3.272rem
        }
        .job-sub::before {
          width: 22.428rem
        }
        .title-sub--half {
          margin-top: 2.618rem
        }
        .job-sub--shorter::before {
          width: 13.861rem
        }
      }

    `}</style>
  </div>
)

export default flattenProp('data')(IntroEntry)
