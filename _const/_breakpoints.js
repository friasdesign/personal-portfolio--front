// @flow

export const forPhoneOnly =
  "only screen and (max-width: 599px)"

export const forPhoneLandscape = (styles: string) =>
  `@media (max-width: 799px) and (orientation: landscape){${styles}}`

export const forTablePortraitUp = (styles: string) =>
  `@media (min-width: 700px){${styles}}`

export const forTabletPortraitOnly =
  "(min-width: 700px) and (max-width: 899px) and (orientation: portrait)"

export const forTabletLandscapeUp = (styles: string) =>
  `@media (min-width: 900px) and (orientation: landscape){${styles}}`

export const forDesktopUp = (styles: string) =>
  `@media (min-width: 1200px){${styles}}`

export const forBigDesktopUp = (styles: string) =>
  `@media (min-width: 1800px){${styles}}`

export const forDppx = (dppx: number, styles: string):string =>
  `
  @media only screen and (-webkit-min-device-pixel-ratio: ${dppx}),
  only screen and (   min--moz-device-pixel-ratio: ${dppx}),
  only screen and (     -o-min-device-pixel-ratio: ${dppx}/1),
  only screen and (        min-device-pixel-ratio: ${dppx}),
  only screen and (                min-resolution: ${dppx * 96}dpi),
  only screen and (                min-resolution: ${dppx}dppx){
    ${styles}
  }
  `
