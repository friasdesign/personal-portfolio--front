// @flow
/*
Props of this component get composed using ramda, the order is important to check
the types properly, the evaluation order is the following:
- processOdd :: InputProps a -> WithOddProps b
- processTheme :: WithOddProps a -> WithThemeProps b
- processTriggered :: WithThemeProps a -> WithTriggeredProps b
 */
import _ from 'ramda'

// COMPONENTS __________________________________________________________________
import AnchorContainer from '../AnchorContainer'
import DivContainer from '../DivContainer'
import Img from '../Img'

// TYPES _______________________________________________________________________
import type {
  InputProps,
  WithOddProps,
  WithThemeProps,
  WithTriggeredProps,
  FinalProps
} from '../../_types'

// PROCESS ODD _________________________________________________________________
// processOdd :: InputProps a -> WithOddProps b
const processOdd = (props: InputProps): WithOddProps => (
  {
    ...props,
    lineEntryClassName: `line__entry ${props.odd ? 'line__entry--odd' : ''}`
  }
)

// PROCESS THEME _______________________________________________________________
// processTheme :: WithOddProps a -> WithThemeProps b
const processTheme = (props: WithOddProps): WithThemeProps => ({
  ...props,
  contentClassName: `entry__content ${
    props.theme === 'mono'
    ? 'entry__content--mono'
    : ''
  }`
})

// PROCESS TRIGGERED ___________________________________________________________
// processTriggered :: WithThemeProps a -> WithTriggeredProps b
const processTriggered = (props: WithThemeProps): WithTriggeredProps => ({
  ...props,
  containerClassName: `entry__container fade-bottom ${
      props.triggered
      ? ''
      : 'fade-bottom--init'
    }`
})

// PROCESS HOVER _______________________________________________________________
// processTriggered :: WithTriggeredProps a -> FinalProps b
const processHover = (props: WithTriggeredProps): FinalProps => ({
  ...props,
  ContainerComponent: props.hoverEnabled
    ? AnchorContainer
    : DivContainer,
  IconComponent: props.hoverEnabled
    ? props.entry.logo
    : Img
})

// COMPOSE PROPS _______________________________________________________________
export default _.compose(
  processHover,
  processTriggered,
  processTheme,
  processOdd
)
