import React from 'react'
import {shallow} from 'enzyme'

import {PortfolioTesting} from './index'

import {PageTemplateProps} from '../../_testing-data'

describe('Portfolio', () => {
  const wrapper = shallow(<PortfolioTesting {...PageTemplateProps} />)

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
