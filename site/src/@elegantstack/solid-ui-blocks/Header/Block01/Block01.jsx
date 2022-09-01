import React from 'react'
import { Link as GLink } from 'gatsby'
import Sticky from 'react-sticky-el'
import { Container, Box, Flex, Text, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import Drawer from '@solid-ui-components/Drawer'
import Search from '@widgets/Search'

const styles = {
  wrapper: {
    position: `relative`,
    zIndex: 10,
    '.nav-container': {
      // bg: `headerBg`,
      bg: `transparent`,
      position: `fixed`,
      transition: `all 250ms ease-in`,
      py: 3
    },
    '.nav-sticky .nav-container': {
      // bg: `headerActiveBg`,
      bg: `white`,
      boxShadow: `0 0 25px rgba(140,152,164,.25)`,
      py: [3, null, 2],
      '.button-group-link.level-1, button-group-link.level-1:visited': {
        // color: `headerActiveColor`
        color: `omegaDarker`
      }
    },
    //Make buttons in header smaller
    '.button-group-button': {
      minWidth: 120,
      fontSize: 1,
      px: 3,
      py: 1
    }
  },
  header: {
    justifyContent: `space-between`,
    alignItems: `center`
    // height: [`6rem`, `7rem`], //prevent layout shift
  },
  logoContainer: {
    flexShrink: 0,
    alignItems: `center`,
    mr: [null, null, 3]
  },
  desktopMenu: {
    display: [`none`, null, `block`],
    minWidth: `auto`,
    flexGrow: 1
  },
  mobileMenu: {
    display: [`block`, null, `none`],
    order: [3, null, `unset`]
  }
}

const HeaderBlock01 = ({ content: { images, collection }, menuJustify }) => {
  return (
    <>
      <Sticky
        enabled='true'
        stickyClassName='nav-sticky'
        css={css(styles.wrapper)}
      >
        <Container variant='full' className='nav-container'>
          <Container px={[2, 4]}>
            <Flex sx={styles.header}>
              <Flex sx={styles.logoContainer}>
                <GLink to='/'>
                  <ContentImages
                    content={{ images }}
                    sx={styles.image}
                    imageEffect='fadeIn'
                  />
                </GLink>
                <Text
                  sx={{
                    fontSize: 1,
                    borderLeftStyle: `solid`,
                    borderLeftWidth: `md`,
                    borderLeftColor: `omegaLight`,
                    lineHeight: 1.3,
                    px: [2, null, 3],
                    ml: [2, null, 3]
                  }}
                >
                  
                  <br />
                  
                </Text>
              </Flex>
              {collection && (
                <>
                  <Box sx={styles.desktopMenu}>
                    <Reveal effect='fadeInDown'>
                      <Flex
                        sx={{
                          alignItems: `center`,
                          justifyContent: menuJustify
                        }}
                      >
                        {collection.map(
                          ({ buttons }, index) =>
                            buttons && (
                              <Box
                                key={`item-${index}`}
                                sx={{
                                  '& + &': {
                                    ml: 3
                                  },
                                  '.level-1 + .level-1': {
                                    ml: [1, null, null, 3]
                                  }
                                }}
                              >
                                <ContentButtons content={buttons} />
                              </Box>
                            )
                        )}
                      </Flex>
                    </Reveal>
                  </Box>
                  <Box sx={styles.mobileMenu}>
                    <Drawer
                      buttonStyle={{
                        bg: `transparent !important`,
                        p: 0,
                        border: 0,
                        size: `auto`,
                        svg: { size: 35, color: `omegaDark` }
                      }}
                    >
                      {collection.map(
                        ({ buttons }, index) =>
                          buttons && (
                            <Box
                              key={`item-${index}`}
                              sx={{
                                fontSize: 3,
                                '.button-group-link.level-1, button-group-link.level-1:visited':
                                  {
                                    // color: `headerActiveColor`
                                    color: `omegaDarker`
                                  }
                              }}
                            >
                              <ContentButtons
                                content={buttons}
                                variant='vertical'
                              />
                            </Box>
                          )
                      )}
                      <Divider space={5} />
                    </Drawer>
                  </Box>
                  <Box
                    sx={{ order: [2, null, `unset`] }}
                    ml={[`auto`, null, 3]}
                    mr={[4, null, 0]}
                  >
                    <Search />
                  </Box>
                </>
              )}
            </Flex>
          </Container>
        </Container>
      </Sticky>
    </>
  )
}

HeaderBlock01.defaultProps = {
  menuJustify: `flex-end`
}

export default WithDefaultContent(HeaderBlock01)
