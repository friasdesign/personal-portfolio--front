import React from 'react'
import {shallow} from 'enzyme'

import {AboutTesting} from './index'

import {PageTemplateProps} from '../../_testing-data'

describe('About', () => {
  const wrapper = shallow(<AboutTesting {...PageTemplateProps} />)

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
