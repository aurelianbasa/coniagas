import React from 'react'
import { Link } from 'theme-ui'
import SVG from 'react-inlinesvg'
import gatsbySVG from '../../../../static/Gatsby-Logo.svg'

const styles = {
  link: {
    display: `inline-flex`,
    color: `heading`,
    fontWeight: `medium`,
    textDecoration: `none`,
    ':visited': {
      color: `heading`
    },
    ':hover': {
      color: `#9cc2dd`
    },
    svg: {
      height: 18,
      width: 18,
      mr: 2
    }
  }
}

const PoweredByGatsby = () => (
  <Link
    target='_blank'
    title='Gatsby'
    href='https://www.resourceactive.com'
    rel='noopener'
    sx={styles.link}
  >
    {<SVG src={gatsbySVG} />}
    Designed By Resource Active
  </Link>
)

export default PoweredByGatsby
