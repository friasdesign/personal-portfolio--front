// @flow
import React from 'react'

// TYPE DEFINITION _____________________________________________________________
import type {FinalProps} from '../../_types'

// RENDER COMPONENT ____________________________________________________________
const renderComponent = (props: FinalProps) => {
  const {
    setTopPosition,
    entry,
    lineEntryClassName,
    contentClassName,
    containerClassName,
    IconComponent,
    ContainerComponent
  } = props

  return (
    <div ref={e => setTopPosition(e)}
      className={`line__entry ${lineEntryClassName}`}
    >
      <ContainerComponent link={entry.link}
        className={`entry__container fade-bottom ${containerClassName}`}
      >
        <IconComponent entry={entry}/>
        <div className={`entry__content ${contentClassName}`}>
          <p className="entry__sub">{entry.sub}</p>
          <h3 className="entry__h">{entry.h}</h3>
          <p className="entry__text"
            dangerouslySetInnerHTML={{__html: entry.text}}
          />
        </div>
      </ContainerComponent>
    </div>
  )
}

export default renderComponent
