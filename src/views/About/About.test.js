import React from 'react'
import {shallow} from 'enzyme'

import About from './index'

describe('About', () => {
  const wrapper = shallow(<About />)

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
