/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

import tornado from './assets/tornado-pattern.svg'
import about from './assets/about.jpg'

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
      width: `full`,
      height: `10/12`,
      top: 0,
      right: 0,
      borderRadius: t => `0 0 ${t.radii.xl} ${t.radii.xl}`,
      borderRadius: `xl`,
      mx: `auto`
    },
    '::after': {
      zIndex: -2,
      background: `url(${about}) no-repeat right bottom`,
      backgroundSize: `cover`,
      opacity: 0.4
    },
    '::before': {
      background: `url(images/about.jpg) center center`,
      backgroundSize: `contain`
    }
  },
  teamContainer: {
    'img, .block-overlay': {
      borderRadius: `xl`
    }
  }
}
