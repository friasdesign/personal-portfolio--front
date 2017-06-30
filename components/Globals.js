import Head from 'next/head'

export default () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>Carlos Frias | Full-stack Developer</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:400,700,900"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"/>
    <link rel="shortcut icon" href="/static/favicon.ico"/>

    <style jsx global>{`
      body {
        font-size: 18px;
        font-family: 'Raleway', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      *, *:before, *:after {
        box-sizing: inherit;
      }
    `}</style>
  </Head>
)
