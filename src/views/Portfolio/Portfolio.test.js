import React from 'react'
import {shallow} from 'enzyme'

import Portfolio from './index'

describe('Portfolio', () => {
  const wrapper = shallow(<Portfolio />)

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
