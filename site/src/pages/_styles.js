/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

export default {
  heroContainer: {
    position: `relative`,
    py: [5],
    '::before, ::after': {
      position: `absolute`,
      content: `" "`,
      size: `full`,
      top: [0, null, `30%`],
      left: 0,
      transform: [`translate(0, 0)`, null, `translate(0, 0)`],
      zIndex: -1,
      borderRadius: [0, null]
    },
    '::after': {
      background: `linear-gradient(
          180deg,
          rgba(255,255,255,0.9) 0%,
          rgba(255,255,255,0.3) 100%
        )`
    },
    '::before': {
      background: `url(images/energy.jpg) no-repeat center center`,
      backgroundSize: `cover`
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
  testimonialsContainer: {
    position: `relative`,
    borderRadius: `xl`,
    pt: 6,
    pb: 5,
    background: t => `linear-gradient(
      150deg,
      ${t.colors.omegaDark} 50%,
      ${t.colors.omegaDarker} 100%
    )`
  }
}
