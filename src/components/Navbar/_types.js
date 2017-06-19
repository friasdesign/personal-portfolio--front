// @flow
import type {Element, FunctionalComponent} from 'react-flow-types'

export type inputProps = {
  minimal: boolean,
  menuOpen: boolean,
  toggleMenuOpen: () => void
}

export type withMinimalProps = inputProps & {
  headerComponentClassName: string,
  logoContainer: (Object) => Element<any> | null,
  hamburgerStyle: {display?: string},
  listOnTop: () => Element<any> | null
}

export type withMenuOpenProps = withMenuOpenProps & {
  renderHamburger: (FunctionalComponent<Object>, number) => Element<any>,
  listOnBottom: () => Element<any> | null
}
