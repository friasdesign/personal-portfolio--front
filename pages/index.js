// @flow
// import type {indexProps} from '../types'
import Globals from '../components/Globals'

import {antiAliased} from '../_const/_other'

// COMPONENTS __________________________________________________________________
import Introduction from '../components/Introduction'

const Index = (props: any) => (
  <main className="home">
    <Globals/>
    <div className="home-content home-content--pic">
      <h1 id="home__title" hidden>Home</h1>
      <Introduction/>
    </div>

    <style jsx>{`
      .home {
        background-color: #000;
        width: 100vw;
        height: 100vh;
        ${antiAliased}
      }
    `}</style>
  </main>
)

export default Index