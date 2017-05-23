// @flow

import React from 'react'

import './ArticleLine.sass'

type ArticleLineProps = {
  heading: string,
  entries: Array<{
    logo: string,
    sub: string,
    h: string,
    text: string
  }>
}

const ArticleLine = ({heading, entries}: ArticleLineProps) => (
  <article className="article-line">
    <h2 className="article-heading">{heading}</h2>
    <div className="line__entries">
      {
        entries.map((e, i) => (
          <div key={i} className={`line__entry ${
              i % 2 !== 0
              ? 'line__entry--odd'
              : ''
            }`}>
            <img src={e.logo} alt={`Logo of ${e.h}`} className="entry__logo"/>
            <div className="entry__content">
              <p className="entry__sub">{e.sub}</p>
              <h3 className="entry__h">{e.h}</h3>
              <p className="entry__text"
                dangerouslySetInnerHTML={{__html: e.text}}
              />
            </div>
          </div>
        ))
      }
    </div>
  </article>
)

export default ArticleLine
