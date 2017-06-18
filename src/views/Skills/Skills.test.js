import React from 'react'
import {shallow} from 'enzyme'

import {SkillsTesting} from './index'

import {PageTemplateProps} from '../../_testing-data'

describe('Skills', () => {
  const wrapper = shallow(<SkillsTesting {...PageTemplateProps} />)

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
