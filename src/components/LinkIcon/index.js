// @flow
import React from 'react'

// IMPORT LOGOS ________________________________________________________________
import GithubLogo from './GithubLogo'
import WebIcon from './WebIcon'

// TYPES _______________________________________________________________________
import type {Element} from 'react-flow-types'

type LinkIconProps = {
  title: string,
  link: string,
  logo: string
}

// RENDER ICON HELPER __________________________________________________________
const renderIcon = (logo: string): Element<any> => {
  switch(logo) {
    case 'github':
      return <GithubLogo/>
    case 'web':
      return <WebIcon/>
    default:
      return <WebIcon/>
  }
}

const LinkIcon = (props: LinkIconProps) => {
  const {
    link,
    title,
    logo
  } = props

  return (
    <a target="_blank" href={link} title={title}>
      {
        renderIcon(logo)
      }
    </a>
  )
}

export default LinkIcon
