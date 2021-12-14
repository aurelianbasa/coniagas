import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentContainer from '@solid-ui-components/ContentContainer'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  avatar: {
    width: 150,
    bg: `omegaLighter`,
    borderTopColor: `omegaLighter`,
    borderTopWidth: `xl`,
    borderTopStyle: `solid`,
    borderRadius: `lg`,
    boxSizing: `content-box`
  }
}

const TestimonialsBlock02 = ({ content: { text, collection } }) => (
  <Container>
    <Box sx={{ textAlign: `center` }}>
      <ContentText content={text} />
    </Box>
    <Divider />
    <Flex sx={{ mx: -3, flexWrap: `wrap` }}>
      {collection?.map(({ container, avatar, text }, index) => (
        <Box
          key={`item-${index}`}
          sx={{ flexBasis: [`1`, `1/2`], flexGrow: 1, p: 3 }}
        >
          <Reveal effect='fadeInLeft' delay={0.25 * (index + 2)}>
            <Flex
              sx={{
                alignItems: `center`,
                flexDirection: [`column`, null, null, `row`]
              }}
            >
              <ContentContainer
                content={container}
                variant='cards.paper'
                sx={{
                  flexBasis: `1/3`,
                  textAlign: `center`,
                  position: `relative`,
                  width: `full`
                }}
              >
                <ContentText content={text?.slice(0, 2)} />
              </ContentContainer>
              <Box
                sx={{
                  ml: [0, null, null, -3],
                  mr: [0, null, null, 3],
                  mt: [-4, null, null, 0],
                  mb: [3, null, null, 0]
                }}
              >
                <ContentImages
                  content={{ images: [avatar] }}
                  sx={styles.avatar}
                  imageEffect='fadeIn'
                />
              </Box>
              <Box sx={{ flexBasis: `1/3`, flexGrow: 1 }}>
                <ContentText content={text?.slice(2)} />
              </Box>
            </Flex>
          </Reveal>
        </Box>
      ))}
    </Flex>
  </Container>
)

export default WithDefaultContent(TestimonialsBlock02)
