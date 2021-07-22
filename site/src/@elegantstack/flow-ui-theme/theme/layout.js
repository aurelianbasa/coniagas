import defaultStyles from '@elegantstack/flow-ui-theme/src/theme/layout'

const layout = {
  ...defaultStyles,
  header: {
    justifyContent: `space-between`,
    alignItems: `center`,
    height: `6rem`, //prevent layout shift
    py: 0,
    mt: [0, null, `-1px`]
  }
}

export default layout
