// @flow

// LOGOS
import reactLogo from '../../_assets/react.svg'
import sketchColorLogo from '../../_assets/sketch-color.svg'
import serverlessLogo from '../../_assets/serverless.svg'
import goLogo from '../../_assets/go.svg'

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
import clcity from './_assets/clcity.jpg'
import clcity_2x from './_assets/clcity@2x.jpg'
import clcity_3x from './_assets/clcity@3x.jpg'

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
  links: Array<{| title: string, link: string, type: string |}>
}

export const featured = [
  {
    images: {
      default: simposio,
      x2: simposio_2x,
      x3: simposio_3x
    },
    title: 'Simposio de Contabilidad',
    type: 'Landing page - Admin panel',
    description: `
        <p>
        Lading page for an accounting simposium held in Ushuaia, Tierra del Fuego, Argentina. It also included an admin panel.
        It used a static page, and <strong>AWS lambda functions</strong> to provide serverless functionality.
        </p>
        <p>
          Use cases:
          <ul>
            <li>
              Provide infomation about the simposium
            </li>
            <li>
              Allow subscribers to submit subscription form
            </li>
            <li>
              Allow organizers to manage subscriptions
            </li>
          </ul>
        </p>
        <p>
          Resposibilities:
          <ul>
            <li>
              Back-end and Front-end development
            </li>
            <li>
              Deployment
            </li>
          </ul>
        </p>
      `,
    techs: [
      {
        title: 'React',
        logo: reactLogo
      },
      {
        title: 'Sketch',
        logo: sketchColorLogo
      },
      {
        title: 'Serverless',
        logo: serverlessLogo
      }
    ],
    links: [
      {
        title: 'Github page - Website',
        link: 'https://github.com/cafrias/xii-simposio-web',
        type: GITHUB_TYPE
      },
      {
        title: 'Github page - Admin panel',
        link: 'https://github.com/cafrias/xii-simposio-admin',
        type: GITHUB_TYPE
      },
      {
        title: 'Website',
        link: 'https://www.simposioenushuaia.com.ar/',
        type: WEB_TYPE
      }
    ]
  },
  {
    images: {
      default: clcity,
      x2: clcity_2x,
      x3: clcity_3x
    },
    title: 'clcity',
    type: 'Command-line Application',
    description: `
        <p>
        Command-line application for fetching and parsing data from an endpoint that has local public transportation information.
        </p>
        <p>
          Use cases:
          <ul>
            <li>
            Generate a KML file public local transportation information, such as stops, trips, etc.
            </li>
            <li>
            Generate a basic GTFS feed with public local transportation information to be later polish by hand and published to Google Transit
            </li>
          </ul>
        </p>
        <p>
          Resposibilities:
          <ul>
            <li>
            Only developer and maintainer of the project
            </li>
          </ul>
        </p>
      `,
    techs: [
      {
        title: 'Go',
        logo: goLogo
      }
    ],
    links: [
      {
        title: 'Github page - Website',
        link: 'https://github.com/cafrias/clcity',
        type: GITHUB_TYPE
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
    title: "Huddle Bar's Website",
    type: 'Website',
    description: `
        <p>
        This is the website for a friend's bar in Setagaya, Tokyo.
        It's currently under development, but moving fast. Check the design prototypes!
        </p>
      `,
    techs: [
      {
        title: 'React',
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
        link: 'https://github.com/cafrias/huddle-web',
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
    logo: screwdriverIcon,
    sub: 'Monitoring Tools',
    h: 'Monitorize',
    text:
      'A Server Monitoring Stack I put together while working at Rio Grande Municipality. Uses InfluxDB, Grafana, and Prometheus. <a target="_blank" href="https://github.com/cafrias/monitorize">Github</a>'
  },
  {
    logo: controllerIcon,
    sub: 'Game',
    h: 'Pogo',
    text:
      'Developed during 2016 edition of the Global Game Jam on Rio Grande, Tierra del Fuego, Argentina. I was in charge of development using Unity.<br/><a target="_blank" href="http://globalgamejam.org/2016/games/pogo">Download</a>'
  },
  {
    logo: screwdriverIcon,
    sub: 'Optimization',
    h: 'Mobile Portfolio',
    text:
      'Project developed while taking Udacity’s Front-end Nanodegree, main objective of the project was to improve performance of existing web app.<br/><a target="_blank" href="https://github.com/cafrias/frontend-nanodegree-mobile-portfolio">Github</a>'
  },
  {
    logo: webIcon,
    sub: 'Web app',
    h: 'Discuss App',
    text:
      'Developed as part of Stephen Grider’s Udemy’s Course on Phoenix web Framework. Tech stack used: Elixir – Phoenix, CSS3, HTML5, JS.<br/><a target="_blank" href="https://github.com/cafrias/discuss-app">Github</a>'
  },
  {
    logo: controllerIcon,
    sub: 'Game',
    h: 'Arcade Game',
    text:
      'Developed as HTML5 Canvas project, while coursing Front-end Nanodegree at Udacity. Tech stack includes: HTML5 Canvas, JS, basic CCS3.<br/><a target="_blank" href="https://github.com/cafrias/frontend-nanodegree-arcade-game">Github</a>'
  },
  {
    logo: webIcon,
    sub: 'Web app',
    h: 'Neighborhood',
    text:
      'Project also developed as part of Udacity’s Front-end Nanodegree. It’s main objective was to be able to use external APIs, in this case Google Maps API.<br/><a target="_blank" href="https://github.com/cafrias/neighborhood-map">Github</a>'
  }
]
