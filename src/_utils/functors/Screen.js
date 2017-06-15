import _ from 'ramda'
import {IO} from 'monet'

const IOScreen = IO(() => screen)

export const screenGetHeight = IOScreen.map(_.props('height'))
