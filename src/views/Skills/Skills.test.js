import React from 'react'
import {shallow} from 'enzyme'

import Skills from './index'

describe('Skills', () => {
  const wrapper = shallow(<Skills />)

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
