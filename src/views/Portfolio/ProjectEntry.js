// @flow
import React from 'react'

// TYPE ________________________________________________________________________
type ProjectEntryProps = {
  project: {
    images: {
      default: string,
      x2: string,
      x3: string
    },
    title: string,
    type: string,
    description: string,
    techs: Array<{| title: string, logo: string |}>,
    links: Array<{| title: string, link: string, logo: string |}>
  }
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
  return (
    <div className="project-entry">
      <div className="project__img-container">
        <img srcSet={`
            ${images.x2} 2x,
            ${images.x3} 3x,
          `}
          src={images.default}
          alt={`
              Snapshot of project ${title}
            `}
        />
      </div>
      <article className="project__text">
        <header className="project__header">
          <h3 className="project__title">{title}</h3>
          <p className="project__type">{type}</p>
        </header>
        <p className="project__description">{description}</p>
        <footer className="project__footer">
          <div className="project__techs">
            {
              techs.map(({title, logo}, i) =>
                <img key={i} title={title} src={logo} alt={title} />
              )
            }
          </div>
          <div className="project__links">
            {
              links.map(({title, link, logo}, i) =>
                <a key={i} href={link}>
                  <img title={title} src={logo} alt={title} />
                </a>
              )
            }
          </div>
        </footer>
      </article>
    </div>
  )
}

export default ProjectEntry
