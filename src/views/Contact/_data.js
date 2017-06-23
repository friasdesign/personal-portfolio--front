// @flow

// LOGOS _______________________________________________________________________
import twitterLogo from './_logos/TwitterLogo'
import linkedInLogo from './_logos/LinkedInLogo'
import gmailLogo from './_logos/GmailLogo'
import fdLogo from './_logos/FDLogo'
import behanceLogo from './_logos/BehanceLogo'

// TYPES _____________________________________________________________________
import type {FunctionalComponent} from 'react-flow-types'

export type contactEntry = {
  logo: FunctionalComponent<Object>,
  sub: string,
  h: string,
  text: string,
  link: string
}

export const contactInfo = [
  {
    logo: twitterLogo,
    sub: 'Social',
    h: 'Twitter',
    text: '@friasdesign',
    link: 'https://twitter.com/friasdesign'
  },
  {
    logo: linkedInLogo,
    sub: 'Social',
    h: 'LinkedIn',
    text: 'linkedin.com/in/friasdesign',
    link: 'https://www.linkedin.com/in/friasdesign/'
  },
  {
    logo: gmailLogo,
    sub: 'E-mail',
    h: 'Gmail',
    text: 'carlos.a.frias@gmail.com',
    link: 'mailto:carlos.a.frias@gmail.com'
  },
  {
    logo: fdLogo,
    sub: 'E-mail',
    h: 'Work',
    text: 'contact@friasdesign.com',
    link: 'mailto:contact@friasdesign.com'
  },
  {
    logo: behanceLogo,
    sub: 'Design Portfolio',
    h: 'Behance',
    text: 'Feel free to check my designs! :D',
    link: 'https://www.behance.net/carlosafri8572'
  }
]
