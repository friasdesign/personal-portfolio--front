// @flow
/*
This functional component, taking the advantage of Functional Programming approach
is composed based on two major composed functions, one that calculates the props,
the other that renders the component.
 */
import _ from 'ramda'

// ASSETS ______________________________________________________________________
import './ArticleEntry.sass'

// FUNCTIONS ___________________________________________________________________
import processProps from './props'
import renderComponent from './render'

// COMPONENTS __________________________________________________________________
import TriggerOnScreen from '../../../TriggerOnScreen'

// COMPONENT ___________________________________________________________________
const ArticleEntry = _.compose(renderComponent, processProps)

// DECORATE AND EXPORT _________________________________________________________
export default TriggerOnScreen(ArticleEntry)
