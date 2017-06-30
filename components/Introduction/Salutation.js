// @flow
import {branch, renderNothing} from 'recompose'

// STYLE CONSTANTS _____________________________________________________________
import {$primary, $white} from '../../_const/_colors'
import {
  forTabletPortraitOnly,
  forTabletLandscapeUp,
  forDesktopUp,
  forBigDesktopUp
} from '../../_const/_breakpoints'

// HELPERS _____________________________________________________________________
const checkIfNotFirst = ({first}: {first: boolean}) => !first
const renderOnlyIfFirst = branch(checkIfNotFirst, renderNothing)

// SALUTATION __________________________________________________________________
const Salutation = renderOnlyIfFirst(
  (props: {first: boolean}) => (
    <p className="name">
      Hi! I am {' '}<span className="semi">Carlos Frias</span>

      <style jsx>{`
        .name {
          font-size: 1.82rem;
          color: ${$primary};
          margin: 0;
          margin-bottom: 3.272rem;
          align-self: flex-end;
        }

        .semi {
          font-weight: bold;
          color: ${$white};
          text-transform: uppercase;
        }

        @media ${forTabletPortraitOnly} {
          .name {
            font-size: 1.618rem;
          }
        }

        @media ${forTabletLandscapeUp} {
          .name {
            font-size: 2.023rem;
          }
        }

        @media ${forDesktopUp} {
          .name {
            align-self: flex-start;
          }
        }

        @media ${forBigDesktopUp} {
          .name {
            font-size: 2.618rem;
          }
        }
      `}</style>
    </p>
  )
)

export default Salutation
