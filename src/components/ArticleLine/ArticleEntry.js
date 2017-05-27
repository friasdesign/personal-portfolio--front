// @flow
import React from 'react'

// ASSETS ______________________________________________________________________
import './ArticleEntry.sass'

// COMPONENTS __________________________________________________________________
import TriggerOnScreen from '../TriggerOnScreen'

// TYPE DEFINITION _____________________________________________________________
type Props = {
  entry: {
    logo: string,
    h: string,
    sub: string,
    text: string
  },
  theme?: 'default' | 'mono',
  odd: boolean,
  setTopPosition: () => void,
  triggered: boolean
}

// COMPONENT ___________________________________________________________________
const ArticleEntry = ({setTopPosition, entry, odd, theme, triggered}: Props) => {
  console.log('re-rendered')
  return (
    <div ref={e => setTopPosition(e)} className={`line__entry ${
        odd
        ? 'line__entry--odd'
        : ''
      }`}>
      <div className={`entry__container fade ${
          triggered
          ? ''
          : 'fade-bottom'
        }`}>
        <img src={entry.logo} alt={`Logo of ${entry.h}`} className="entry__logo"/>
        <div className={`entry__content ${
            theme === 'mono'
            ? 'entry__content--mono'
            : ''
          }`}>
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

export default TriggerOnScreen(ArticleEntry)
