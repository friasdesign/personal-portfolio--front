// @flow
// import type {indexProps} from '../types'
import Head from '../components/Head'

// COMPONENTS __________________________________________________________________
import Introduction from '../components/Introduction'

const Index = (props: any) => (
  <main className="home">
    <Head/>
    <div className="home-content home-content--pic">
      <h1 id="home__title" hidden>Home</h1>
      <Introduction/>
    </div>
  </main>
)

export default Index
