// default flow-ui links
import baseLinks from '@elegantstack/flow-ui-theme/src/theme/links'

// from solid-ui (used for unifying header and footer)
import disabled from '@solid-ui-theme/links/disabled'
import hidden from '@solid-ui-theme/links/hidden'
import navDark from '@solid-ui-theme/links/nav-dark'
import navLight from '@solid-ui-theme/links/nav-light'

const links = {
  ...baseLinks,
  disabled,
  hidden,
  'nav-dark': navDark,
  'nav-light': navLight
}

export default links
