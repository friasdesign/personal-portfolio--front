import _ from 'ramda'
import {IO} from 'monet'

const IOWindow = IO(() => window)

export const windowGetScrollY = IOWindow.map(_.prop('scrollY'))
export const windowGetInnerHeight = IOWindow.map(_.prop('_INNER_HEIGHT'))
export const windowSetTimeout = (cb, time) => IOWindow.map((w) => w.setTimeout(cb, time))
export const windowClearInterval = timer => IOWindow.map((w) => w.clearInterval(timer))
