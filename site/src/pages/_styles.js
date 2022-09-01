/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */

export default {
  featuresContainer: {
    bg: `beta`,
    borderRadius: `xl`,
    py: 1,
    px: [1, 1]
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
      background: `linear-gradient(
        180deg,
        #f7f9fe 0%,
        #f4f4f8 100%
      )`
    }
  },
  testimonialsContainer: {
    py: [5, 6],
    background: t => `linear-gradient(
      150deg,
      ${t.colors.omegaDark} 50%,
      ${t.colors.omegaDarker} 100%
    )`
  }
}
