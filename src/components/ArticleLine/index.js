// @flow
import React from 'react'

import './ArticleLine.sass'

import ArticleEntry from './ArticleEntry'

type ArticleLineProps = {
  heading: string,
  hoverEnabled?: boolean,
  theme?: 'default' | 'mono',
  className?: string,
  entries: Array<{
    logo: string,
    sub: string,
    h: string,
    text: string
  }>
}

const ArticleLine = (props: ArticleLineProps) => {
  const {
    className,
    heading,
    entries,
    hoverEnabled,
    theme
  } = props

  return (
    <article className={`article-line ${className || ''}`}>
      <h2 className="article-heading">{heading}</h2>
      <div className="line__line" aria-hidden></div>
      <div className="line__entries">
        {
          entries.map((e, i) => {
            return (
            <ArticleEntry theme={theme || 'default'} key={i}
              entry={e}
              hoverEnabled={hoverEnabled}
              odd={i % 2 !== 0}/>
          )})
        }
      </div>
    </article>
  )
}

export default ArticleLine
