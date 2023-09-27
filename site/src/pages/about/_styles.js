/**
 *
 * These styles are solely for adding [background images] or
 * [background colors] to blocks.
 *
 */


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
    }
  },
  teamContainer: {
    'img, .block-overlay': {
      borderRadius: `xl`
    }
  }
}
