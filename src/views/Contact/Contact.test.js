import React from 'react'
import {shallow} from 'enzyme'

import {ContactTesting} from './index'

import {PageTemplateProps} from '../../_testing-data'

describe('Contact', () => {
  const wrapper = shallow(<ContactTesting {...PageTemplateProps} />)

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
