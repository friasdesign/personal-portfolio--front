// @flow

// LOGOS
import reactLogo from '../../_assets/react.svg'
import reactNativeLogo from '../../_assets/react-native.svg'
import sketchColorLogo from '../../_assets/sketch-color.svg'

// ICONS
import controllerIcon from '../../_assets/controller.svg'
import screwdriverIcon from '../../_assets/screwdriver.svg'
import webIcon from '../../_assets/web.svg'

// PROJECT IMAGES
import simposio from './_assets/simposio.png'
import simposio_2x from './_assets/simposio@2x.png'
import simposio_3x from './_assets/simposio@3x.png'
import huddle from './_assets/huddle.png'
import huddle_2x from './_assets/huddle@2x.png'
import huddle_3x from './_assets/huddle@3x.png'

// CONSTANTS ___________________________________________________________________
export const GITHUB_TYPE = 'github'
export const WEB_TYPE = 'web'

// DEFINE TYPES ________________________________________________________________
export type ProjectType = {
  images: {
    default: string,
    x2: string,
    x3: string
  },
  title: string,
  type: string,
  description: string,
  techs: Array<{| title: string, logo: string |}>,
    links: Array < {| title: string, link: string, type: string |}>
}

export const featured = [
  {
    images: {
      default: simposio,
      x2: simposio_2x,
      x3: simposio_3x
    },
    title: 'Simposio de Contabilidad',
    type: 'Landing page',
    description: 'The landing page for an accounting event held in the city of Ushuaia. Whole project has been made under a tight schedule and close deadline, in less than 6 days from sketch to full deployment.',
    techs: [
      {
        title: 'React',
        logo: reactNativeLogo
      },
      {
        title: 'Sketch',
        logo: sketchColorLogo
      }
    ],
    links: [
      {
        title: 'Github page',
        link: 'https://github.com/friasdesign/simposio-ush',
        type: GITHUB_TYPE
      },
      {
        title: 'Web',
        link: 'http://www.simposioenushuaia.com.ar/',
        type: WEB_TYPE
      }
    ]
  }
]

export const ongoing = [
  {
    images: {
      default: huddle,
      x2: huddle_2x,
      x3: huddle_3x
    },
    title: 'Huddle Bar\'s Website',
    type: 'Website',
    description: 'This is the website for a friend\'s bar in Setagaya, Tokyo. It\'s currently under development, but moving fast. Check the design prototypes!',
    techs: [
      {
        title: 'React – Redux',
        logo: reactLogo
      },
      {
        title: 'Sketch',
        logo: sketchColorLogo
      }
    ],
    links: [
      {
        title: 'Github page',
        link: 'https://github.com/friasdesign/huddle-web',
        type: GITHUB_TYPE
      },
      {
        title: 'Invision',
        link: 'https://invis.io/4CCEG91HB#/241575562_index-Desktop',
        type: WEB_TYPE
      }
    ]
  }
]

export const teenyTiny = [
  {
    logo: controllerIcon,
    sub: 'Game',
    h: 'Pogo',
    text: 'Developed during 2016 edition of the Global Game Jam on Rio Grande, Tierra del Fuego, Argentina. I was in charge of development using Unity.<br/><a target="_blank" href="http://globalgamejam.org/2016/games/pogo">Download</a>'
  },
  {
    logo: screwdriverIcon,
    sub: 'Optimization',
    h: 'Mobile Portfolio',
    text: 'Project developed while taking Udacity’s Front-end Nanodegree, main objective of the project was to improve performance of existing web app.<br/><a target="_blank" href="https://github.com/friasdesign/frontend-nanodegree-mobile-portfolio">Github</a>'
  },
  {
    logo: webIcon,
    sub: 'Web app',
    h: 'Discuss App',
    text: 'Developed as part of Stephen Grider’s Udemy’s Course on Phoenix web Framework. Tech stack used: Elixir – Phoenix, CSS3, HTML5, JS.<br/><a target="_blank" href="https://github.com/friasdesign/discuss-app">Github</a>'
  },
  {
    logo: controllerIcon,
    sub: 'Game',
    h: 'Arcade Game',
    text: 'Developed as HTML5 Canvas project, while coursing Front-end Nanodegree at Udacity. Tech stack includes: HTML5 Canvas, JS, basic CCS3.<br/><a target="_blank" href="https://github.com/friasdesign/frontend-nanodegree-arcade-game">Github</a>'
  },
  {
    logo: webIcon,
    sub: 'Web app',
    h: 'Neighborhood',
    text: 'Project also developed as part of Udacity’s Front-end Nanodegree. It’s main objective was to be able to use external APIs, in this case Google Maps API.<br/><a target="_blank" href="https://github.com/friasdesign/neighborhood-map">Github</a>'
  }
]
