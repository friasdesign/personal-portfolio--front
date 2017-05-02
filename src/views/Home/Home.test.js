import React from 'react'
import {shallow} from 'enzyme'

import Home from './index'

describe('Home', () => {
  const homeWrapper = shallow(<Home />)

  it('should render without crashing', () => {
    expect(homeWrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(homeWrapper).toMatchSnapshot()
  })
})
