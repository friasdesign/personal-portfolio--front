// @flow
import type {indexProps} from '../types'

// COMPONENTS __________________________________________________________________
import Introduction from '../components/Introduction'

const Index = (props: indexProps) => (
  <main className="home">
    <div className="home-content home-content--pic">
      <h1 id="home__title" hidden>Home</h1>
      <Introduction/>
    </div>
  </main>
)

export default Index
