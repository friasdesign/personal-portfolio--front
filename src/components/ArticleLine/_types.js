// @flow
import type {FunctionalComponent, ReactChildren} from 'react-flow-types'

export type ContainerProps = {
  className?: string,
  link?: string,
  children?: ReactChildren
}

export type entryType = {
  logo: string | FunctionalComponent<ContainerProps>,
  h: string,
  sub: string,
  text: string
}

export type InputProps = {
  entry: entryType,
  theme?: 'default' | 'mono',
  hoverEnabled?: boolean,
  odd: boolean,
  lineEntryClassName: string,
  setTopPosition: () => void,
  triggered: boolean
}

export type WithOddProps = InputProps & {
  lineEntryClassName: string
}

export type WithThemeProps = WithOddProps & {
  contentClassName: string
}

export type WithTriggeredProps = WithThemeProps & {
  containerClassName: string
}

export type FinalProps = WithTriggeredProps & {
  ContainerComponent: Component<ContainerProps>,
  IconComponent: Component<ContainerProps>
}
