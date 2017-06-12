// @flow
import React from 'react'

// ASSETS ______________________________________________________________________
import './ProjectEntry.sass'

// COMPONENTS __________________________________________________________________
import LinkIcon from '../../components/LinkIcon'
import TriggerOnScreen from '../../components/TriggerOnScreen'

// TYPE ________________________________________________________________________
import type {ProjectType} from './_data'

type ProjectEntryProps = {
  project: ProjectType,
  setTopPosition: () => void,
  triggered: boolean
}

const ProjectEntry = (props: ProjectEntryProps) => {
  const {
    images,
    title,
    type,
    description,
    techs,
    links
  } = props.project
  const {
    setTopPosition,
    triggered
  } = props
  return (
    <div ref={e => setTopPosition(e)} className="project-entry">
      <div className={`project-entry-container fade-bottom ${
          triggered
          ? ''
          : 'fade-bottom--init'
        }`}>
        <div className="project__img-container">
          <img srcSet={`
              ${images.x2} 2x,
              ${images.x3} 3x,
            `}
            className="project__img"
            src={images.default}
            alt={`
                Snapshot of project ${title}
              `}
          />
        </div>
        <article className="project__text">
          <header className="project__header">
            <h3 className="project__title">{title}</h3>
            <div className="project__type">
              <span className="type__text">{type}</span>
            </div>
          </header>
          <p className="project__description">{description}</p>
          <footer className="icon-container project__footer">
            <div className="project__techs">
              <h4 className="project__footer__heading techs">Technologies</h4>
              {
                techs.map(({title, logo}, i) =>
                  <img className="project__icon"
                    key={i} title={title} src={logo} alt={title} />
                )
              }
            </div>
            <div className="project__links">
              <h4 className="project__footer__heading links">Links</h4>
                {
                  links.map(({title, link, type}, i) =>
                    <LinkIcon key={i} link={link} title={title} logo={type}/>
                  )
                }
            </div>
          </footer>
        </article>
      </div>
    </div>
  )
}

export default TriggerOnScreen(ProjectEntry)
