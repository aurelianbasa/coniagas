import styles from '@widgets/Search/Search.styles'
import iconStyles from '@elegantstack/flow-ui-theme/src/theme/buttons/simple'

export default {
  ...styles,
  form: ({ focus }) => ({
    ...styles.form({ focus }),
    display: focus ? `flex` : `none`
  }),
  mobileTrigger: {
    ...styles.mobileTrigger,
    ...iconStyles,
    display: `block`,
    bg: `omegaLighter`,
    color: `omegaDark`
  },
  close: {
    ...styles.close,
    bg: `transparent`,
    top: [`95vh`, 4],
    size: 24,
    svg: {
      size: 24
    }
  },
  overlay: {
    ...styles.overlay,
    width: `100vw`,
    height: `100vh`
  },
  input: {
    ...styles.input,
    bg: `transparent`,
    p: 2
  }
}
