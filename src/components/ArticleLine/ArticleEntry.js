// @flow
import React from 'react'

import AnimateOnScreen from '../AnimateOnScreen'
import FadeIn from '../../animations/FadeIn'

// TYPE DEFINITION _____________________________________________________________
type Props = {
  entry: {
    logo: string,
    h: string,
    sub: string,
    text: string
  },
  odd: boolean
}

// COMPONENT ___________________________________________________________________
const ArticleEntry = ({entry, odd}: Props) => (
  <div className={`line__entry ${
      odd
      ? 'line__entry--odd'
      : ''
    }`}>
    <img src={entry.logo} alt={`Logo of ${entry.h}`} className="entry__logo"/>
    <div className="entry__content">
      <p className="entry__sub">{entry.sub}</p>
      <h3 className="entry__h">{entry.h}</h3>
      <p className="entry__text"
        dangerouslySetInnerHTML={{__html: entry.text}}
      />
    </div>
  </div>
)

export default AnimateOnScreen(ArticleEntry, FadeIn)
