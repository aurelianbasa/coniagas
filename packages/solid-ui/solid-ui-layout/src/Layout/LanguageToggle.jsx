import React, { useContext } from 'react'
import { Box, } from 'theme-ui'
import { LanguageContext } from './LanguageContext'

const styles = {
  wrapper: {
    position: `fixed`,
    right: 0,
    bottom: `20%`,
    transform: `translate(40px, -56px)`,
    zIndex: 99
  },
  button: {
    borderRadius: `0.5rem 0 0 0.5rem`,
    boxShadow: `-1px 1px 5px 0 rgba(1,1,1,.05)`,
    bg: `white`,
    cursor: `pointer`,
    textTransform: `uppercase`,
    fontSize: 1,
    fontWeight: `bold`,
    p: 3,
    mb: 3,
    pr: 5,
    svg: {
      verticalAlign: `middle`,
      mr: 2
    },
    ':hover': {
      color: `#667eea`
    }
  },
  items: {
    transition: `all 0.2s ease-in`,
    bg: `contentBg`,
    overflow: `hidden`,
    boxSizing: `content-box`,
    boxShadow: `-1px 1px 5px 0 rgba(1,1,1,.05)`,
    borderRadius: `default`,
    textAlign: `center`,
    width: 130,
    maxHeight: 0,
    mb: 3,
    opacity: 0,
    open: {
      opacity: 1,
      pt: 3
    }
  },
  item: {
    display: `flex`,
    borderRadius: `default`,
    overflow: `hidden`,
    cursor: `pointer`,
    transition: `opacity 0.15s ease-in`,
    width: 100,
    height: 35,
    mx: `auto`,
    mb: 2,
    ':hover': {
      opacity: 0.9
    },
    div: {
      flexBasis: `1/4`
    }
  },
  close: {
    bg: `contentBg`,
    borderRadius: `full`,
    cursor: `pointer`,
    width: 24,
    mx: `auto`,
    svg: {}
  }
}

const LanguageToggle = ({onClick}) => {
  const language = useContext(LanguageContext);

  return (
    <Box
      sx={styles.wrapper}
      onClick={onClick}
    >
      <span>{language === 'en' ? 'Français' : 'English'}</span>
    </Box>
  )
}

export default LanguageToggle
