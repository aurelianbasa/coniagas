import React from 'react'
import { Flex, Box, Button, Divider } from 'theme-ui'
import { Link } from 'gatsby'
import Navigation from '@components/Navigation'
import Drawer from '@components/Drawer'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'

/**
 * Start: Custom styles and components
 */
const CustomButtons = [
  {
    name: 'Contact',
    slug: '/contact'
  }
]
const customStyles = {
  wrapper: {
    alignItems: `center`,
    justifyContent: `flex-end`
  },
  button: {
    py: [null, null, 1],
    px: [null, null, 2],
    fontSize: [null, null, 1],
    minWidth: [null, null, 120],
    width: [`full`, null, `auto`],
    ml: [null, null, 2]
  }
}
const CustomNavButton = () => (
  <>
    {CustomButtons.map(button => (
      <Button
        as={Link}
        to={button.slug}
        variant='buttons.primary'
        sx={customStyles.button}
      >
        {button.name}
      </Button>
    ))}
  </>
)
/**
 * End: Custom styles and components
 */

const styles = {
  desktopMenu: {
    display: [`none`, null, `block`]
  },
  mobileMenu: {
    display: [`block`, null, `none`]
  },
  desktopMenuWrapper: {
    justifyContent: 'flex-end'
  }
}

export const HeaderMenu = ({ mobileMenu = {} }) => {
  let { headerMenu } = useSiteMetadata()

  const desktopMenuNav = (
    <Flex sx={customStyles.wrapper}>
      <Navigation
        variant='horizontal'
        items={headerMenu}
        wrapperStyle={styles.desktopMenuWrapper}
      />
      <CustomNavButton />
    </Flex>
  )

  const mobileMenuNav = (
    <Drawer
      sx={{
        color: 'omegaDark',
        bg: `transparent`,
        p: 1,
        svg: { size: `28px` }
      }}
    >
      <Navigation
        variant='vertical'
        headingProps={{ variant: 'h3' }}
        items={[
          {
            title: 'Main Menu',
            items: headerMenu
          },
          mobileMenu
        ]}
      />
      <Divider sx={{ mt: 3 }} />
      <CustomNavButton />
    </Drawer>
  )

  return (
    <>
      <Box sx={styles.desktopMenu}>{desktopMenuNav}</Box>
      <Box sx={styles.mobileMenu}>{mobileMenuNav}</Box>
    </>
  )
}
