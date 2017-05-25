// @flow

import React from 'react'

import './ArticleLine.sass'

import ArticleEntry from './ArticleEntry'

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
    <div className="line__line" aria-hidden></div>
    <div className="line__entries">
      {
        entries.map((e, i) => (
          <ArticleEntry key={i}
            entry={e}
            odd={i % 2 !== 0}/>
        ))
      }
    </div>
  </article>
)

export default ArticleLine
