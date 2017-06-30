// @flow

// import {primary} from '../../_const/_colors'

// STYLE CONSTANTS _____________________________________________________________
import {
  forPhoneLandscape,
  forTabletPortraitOnly,
  forTabletLandscapeUp,
  forDesktopUp
} from '../../_const/_breakpoints'

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
    <style jsx>{`
      .introduction {
        line-height: 1;
        width: 100%;
        padding: 0 1.125rem;
      }

      @media ${forPhoneLandscape} {
        .introduction {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
        }
      }

      @media ${forTabletPortraitOnly} {
        .introduction {
          padding-right: 3.272rem;
          align-self: flex-end;
        }
      }

      @media ${forTabletLandscapeUp} {
        .introduction {
          padding-right: 3.272rem;
          align-self: flex-end;
        }
      }

      @media ${forDesktopUp} {
        .introduction {
          padding: 0;
          margin: 0;
          width: 46%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
      }
    `}</style>
  </div>
)

export default Introduction
