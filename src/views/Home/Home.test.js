import React from 'react'
import {shallow} from 'enzyme'

import Home from './Home'

const homeProps = {
  setNextPage: jest.fn(),
  inTransitionAnimation: [false, ''],
  triggerTransition: jest.fn()
}

describe('Home', () => {
  const homeWrapper = shallow(<Home {...homeProps} />)

  it('should render without crashing', () => {
    expect(homeWrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(homeWrapper).toMatchSnapshot()
  })
})
