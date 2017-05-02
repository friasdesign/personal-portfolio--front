import React from 'react'
import {shallow} from 'enzyme'

import Navbar from './index'

describe('Navbar', () => {
  var navbarWrapper

  beforeEach(() => navbarWrapper = shallow(<Navbar />))

  it('should render without errors', () => {
    expect(navbarWrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(navbarWrapper).toMatchSnapshot()
  })
})
