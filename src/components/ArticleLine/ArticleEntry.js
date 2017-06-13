// @flow
/*
Props of this component get composed using ramda, the order is important to check
the types properly, the evaluation order is the following:
- processOdd :: InputProps a -> WithOddProps b
- processTheme :: WithOddProps a -> WithThemeProps b
- processTriggered :: WithThemeProps a -> WithTriggeredProps b
 */
import React from 'react'
import _ from 'ramda'

// ASSETS ______________________________________________________________________
import './ArticleEntry.sass'

// COMPONENTS __________________________________________________________________
import TriggerOnScreen from '../TriggerOnScreen'

// TYPE DEFINITION _____________________________________________________________
import type {Component} from 'react-flow-types'

type InputProps = {
  entry: {
    logo: string,
    h: string,
    sub: string,
    text: string
  },
  theme?: 'default' | 'mono',
  hoverEnabled?: boolean,
  odd: boolean,
  lineEntryClassName: string,
  setTopPosition: () => void,
  triggered: boolean
}

type WithOddProps = InputProps & {
  lineEntryClassName: string
}

type WithThemeProps = WithOddProps & {
  contentClassName: string
}

type WithTriggeredProps = WithThemeProps & {
  containerClassName: string
}

type FinalProps = WithTriggeredProps & {
  LineEntry: Component<{className: string, setTopPosition: () => void}>
}

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

// COMPOSE PROPS _______________________________________________________________
const processProps = _.compose(
  processTriggered,
  processTheme,
  processOdd
)

// RENDER COMPONENT ____________________________________________________________
const renderComponent = (props: FinalProps) => {
  const {
    setTopPosition,
    entry,
    lineEntryClassName,
    contentClassName,
    containerClassName
  } = props

  return (
    <div ref={e => setTopPosition(e)} className={lineEntryClassName}>
      <div className={containerClassName}>
        <img src={entry.logo} alt={`Logo of ${entry.h}`} className="entry__logo"/>
        <div className={contentClassName}>
          <p className="entry__sub">{entry.sub}</p>
          <h3 className="entry__h">{entry.h}</h3>
          <p className="entry__text"
            dangerouslySetInnerHTML={{__html: entry.text}}
          />
        </div>
      </div>
    </div>
  )
}

// COMPONENT ___________________________________________________________________
const ArticleEntry = _.compose(renderComponent, processProps)

// DECORATE AND EXPORT _________________________________________________________
export default TriggerOnScreen(ArticleEntry)
