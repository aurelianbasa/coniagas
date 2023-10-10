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
      zIndex: -3
    },
    '::after': {
      zIndex: -2,
      background: `url(${tornado}) no-repeat left top`,
      backgroundSize: `cover`,
      opacity: 0.4
    }
  },
  newContainer: {
    position: `relative`,
    py: [5],
    '::before, ::after': {
      position: `absolute`,
      content: `" "`,
      size: `full`,
      top: [0, null, `40%`],
      left: 0,
      transform: [`translate(0, 0)`, null, `translate(0, 0)`],
      zIndex: -1,
      borderRadius: [0, null]
    },
    '::after': {
      background: `linear-gradient(
          180deg,
          rgba(255,255,255,0.8) 0%,
          rgba(255,255,255,0.4) 100%
        )`
    },
    '::before': {
      background: `url(images/about.jpg) no-repeat center center`,
      backgroundSize: `full`
    }
  },
  teamContainer: {
    'img, .block-overlay': {
      borderRadius: `xl`
    }
  }
}
