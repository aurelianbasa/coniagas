import React, { useContext } from 'react'
import { Container, Box, Flex } from 'theme-ui'
import pageContextProvider from '@helpers/pageContextProvider'
// import Search from '@widgets/Search'
import { HeaderLogo } from './Header.Logo'
import { HeaderMenu } from './Header.Menu'
import { HeaderColorMode } from '@layout/Header/Header.ColorMode'

const styles = {
  wrapper: {
    position: `relative`,
    bg: `headerBg`
  },
  container: {
    position: `relative`,
    maxWidth: 1240,
    px: [4],
    py: [1, 0],
    zIndex: 10
  },
  logoContainer: {
    flexBasis: [`full`, null, `2/5`]
  },
  searchContainer: {
    flexBasis: [`auto`, null, `1/5`],
    minWidth: `auto`,
    order: [3, null, `unset`],
    mx: 3
  },
  menuContainer: {
    flexBasis: [`auto`, null, `3/5`],
    minWidth: `auto`,
    order: [4, null, `unset`]
  },
  colorModeContainer: {
    minWidth: `auto`,
    order: [2, null, `unset`]
  }
}

export const Header = ({ children }) => {
  const context = useContext(pageContextProvider)

  const {
    // services,
    mobileMenu,
    darkMode
  } = context.pageContext

  // const algolia = services && services.algolia

  return (
    <Box sx={styles.wrapper}>
      <Container variant='compact' sx={styles.container}>
        <Flex variant='layout.header'>
          <Box sx={styles.logoContainer}>
            <HeaderLogo />
          </Box>
          {/* <Box sx={styles.searchContainer}>{algolia && <Search />}</Box> */}
          <Box sx={styles.menuContainer}>
            <HeaderMenu mobileMenu={mobileMenu} />
          </Box>
          <Box sx={styles.colorModeContainer}>
            {darkMode && <HeaderColorMode />}
          </Box>
        </Flex>
      </Container>
      {children}
    </Box>
  )
}
