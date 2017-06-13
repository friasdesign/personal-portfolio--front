// @flow
import React from 'react'

// TYPES _______________________________________________________________________
import type {ReactChildren} from 'react-flow-types'
type TextArticleProps = {
  ready: boolean,
  children?: ReactChildren
}

const TextArticle = ({ready, children}: TextArticleProps) => (
  <article className="m-btm-2">
    <h2 className={`article-heading fade-side ${
        ready
        ? ''
        : 'fade-left'
      }`}>
      Levels
    </h2>
    <div className={`article-text fade-side ${
        ready
        ? ''
        : 'fade-right'
      }`}>
      {children}
    </div>
  </article>
)

export default TextArticle
