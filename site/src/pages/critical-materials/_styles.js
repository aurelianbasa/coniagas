/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

import tornado from './assets/tornado-pattern.svg'

export default {
  heroContainer: {
    position: `relative`,
    pt: [5, 6],
    '::before, ::after': {
      position: `absolute`,
      content: `" "`,
      width: `full`,
      height: `11/12`,
      top: 0,
      right: 0,
      borderRadius: t => `0 0 ${t.radii.xl} ${t.radii.xl}`,
      borderRadius: `xl`,
      mx: `auto`
    },
    '::before': {
      zIndex: -3,
      bg: `omegaDarker`
    },
    '::after': {
      zIndex: -2,
      background: `url(${tornado}) no-repeat left top`,
      backgroundSize: `cover`,
      opacity: 0.25
    }
  },
  tabsContainer: {
    position: `relative`,
    py: [4, 5],
    '::before': {
      position: `absolute`,
      content: `" "`,
      size: `full`,
      top: 0,
      right: 0,
      zIndex: -1,
      borderRadius: `xl`,
      background: `#323d4d`
    }
  },
  teamContainer: {
    'img, .block-overlay': {
      borderRadius: `xl`
    }
  }
}
