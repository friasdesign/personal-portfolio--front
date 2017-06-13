import React from 'react'
import {shallow} from 'enzyme'

import Contact from './index'

describe('Contact', () => {
  const wrapper = shallow(<Contact />)

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
