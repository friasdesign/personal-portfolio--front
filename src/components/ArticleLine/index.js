// @flow

import React from 'react'

import './ArticleLine.sass'

import ArticleEntry from './ArticleEntry'

type ArticleLineProps = {
  heading: string,
  entries: Array<{
    logo: string,
    sub: string,
    theme?: 'default' | 'mono',
    h: string,
    text: string
  }>
}

const ArticleLine = ({heading, entries, theme}: ArticleLineProps) => (
  <article className="article-line">
    <h2 className="article-heading">{heading}</h2>
    <div className="line__line" aria-hidden></div>
    <div className="line__entries">
      {
        entries.map((e, i) => (
          <ArticleEntry theme={theme || 'default'} key={i}
            entry={e}
            odd={i % 2 !== 0}/>
        ))
      }
    </div>
  </article>
)

export default ArticleLine
