// @flow
// import type {indexProps} from '../types'
import Globals from '../components/Globals'

// STYLE CONSTANTS _____________________________________________________________
import {antiAliased} from '../_const/_other'
import {$transparentBlack} from '../_const/_colors'
import {
  forPhoneLandscape,
  forTabletPortraitOnly,
  forTabletLandscapeUp,
  forDesktopUp
} from '../_const/_breakpoints'

// COMPONENTS __________________________________________________________________
import Introduction from '../components/Introduction'

const Index = (props: any) => (
  <main className="home">
    <Globals/>
    <div className="curtain">
      <div className="home-content home-content--pic">
        <h1 id="home__title" hidden>Home</h1>
          <Introduction/>
      </div>
    </div>

    <style jsx>{`
      .home {
        border-top: 5.295rem $transparent-black solid;
        background-color: #000;
        width: 100vw;
        height: 100vh;
        ${antiAliased}
      }
      .home::after {
        display: block;
        content: "";
        position: fixed;
        top: 120%;
        z-index: 12;
        width: 100vw;
        height: 100vh;
        transform: skewY(-10deg);
        background-color: #fff;
      }
      .home--transition::after {
        top: 0;
        transform: skewY(0deg);
        transition: 0.8s ease-out;
      }
      .home-content {
        padding-top: 10%;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      .curtain {
        width: 100%;
        height: 100%;
        background-color: ${$transparentBlack};
      }

      @media ${forPhoneLandscape} {
        .home {
          border-top: 3.272rem rgba(0, 0, 0, .75) solid;
          background-position: center;
        }
        .home-content {
          padding-top: 1.618rem;
        }
      }

      @media ${forTabletPortraitOnly} {
        .home {
          padding-top: 20%;
        }
        .home-container {
          background-position: center;
        }
      }

      @media ${forTabletLandscapeUp} {
        .home {
          padding-top: 5%;
        }
        .curtain {
          background-color: transparent;
        }
        .home-container {
          background-position: left bottom;
          background-size: contain;
        }
      }

      @media ${forDesktopUp} {
        .home {
          border-top: 4.236rem transparent solid;
        }
        .home-content {
          padding-top: 10%;
          width: 90%;
          align-items: flex-end;
        }
      }

    `}</style>
  </main>
)

export default Index
