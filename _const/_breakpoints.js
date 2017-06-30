// @flow

export const forPhoneOnly =
  "only screen and (max-width: 599px)"

export const forPhoneLandscape =
  "only screen and (max-width: 799px) and (orientation: landscape)"

export const forTablePortraitUp =
  "only screen and (min-width: 700px)"

export const forTabletPortraitOnly =
  "only screen and (min-width: 700px) and (max-width: 899px) and (orientation: portrait)"

export const forTabletLandscapeUp =
  "only screen and (min-width: 900px) and (orientation: landscape)"

export const forDesktopUp =
  "only screen and (min-width: 1200px)"

export const forBigDesktopUp =
  "only screen and (min-width: 1800px)"

export const forDppx = (dppx: number):string =>
  `
  only screen and (-webkit-min-device-pixel-ratio: ${dppx}),
  only screen and (   min--moz-device-pixel-ratio: ${dppx}),
  only screen and (     -o-min-device-pixel-ratio: ${dppx}/1),
  only screen and (        min-device-pixel-ratio: ${dppx}),
  only screen and (                min-resolution: ${dppx * 96}dpi),
  only screen and (                min-resolution: ${dppx}dppx)
  `
