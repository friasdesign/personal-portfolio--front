import _ from 'ramda'
import {IO} from 'monet'

const IOWindow = IO(() => window)

export const windowGetScrollY = IOWindow.map(_.prop('scrollY'))
export const windowGetInnerHeight = IOWindow.map(_.prop('innerHeight'))
export const windowSetTimeout = (cb, time) => IOWindow.map((w) => w.setTimeout(cb, time))
export const windowClearInterval = timer => IOWindow.map((w) => w.clearInterval(timer))

export const windowSet_IN_IOS = (value: boolean) =>
  IOWindow.map(w => w._IN_IOS = value)

export const windowGet_IN_IOS = IOWindow.map(_.prop('_IN_IOS'))
