import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  avatar: {
    bg: `omegaLighter`,
    borderTopColor: `omegaLighter`,
    borderTopWidth: `xl`,
    borderTopStyle: `solid`,
    borderRadius: `lg`,
    boxSizing: `content-box`,
    verticalAlign: `baseline`
  }
}

const TestimonialsBlock03 = ({
  content: { text, collection, buttons },
  reverse
}) => (
  <Container>
    <Flex
      sx={{
        margin: 2,
        justifyContent: `space-between`,
        alignItems: `flex-start`,
        flexDirection: [
          reverse ? `column-reverse` : `column`,
          null,
          null,
          reverse ? `row-reverse` : `row`
        ]
      }}
    >
      <Box
        sx={{
          margin: 2,
          flexBasis: `full`
        }}
      > 
          {collection?.map(({ container, text, avatar }, index) => (
            <ContentContainer
              content={container}
              variant='cards.paper'
              key={`item-${index}`}
              sx={{ position: `relative` }}
            >
              <Flex
                sx={{
                  margin: 2,
                  alignItems: `center`,
                  position: `relative`,
                  flexWrap: `wrap`,
                  zIndex: 1
                }}
              >
                <Box sx={{ width: 150 }}>
                  <ContentImages
                    content={{ images: [avatar] }}
                    sx={styles.avatar}
                    imageEffect='fadeInRotate'
                  />
                </Box>
                <Box sx={{ flex: [`100%`, 1], ml: [0, 4] }}>
                  <Reveal effect='fadeInUp'>
                    <ContentText content={text} />
                    {Array.from({ length: 5 }, (_, i) => (
                      <Reveal
                        key={`item-${i}`}
                        effect='fadeInRotate'
                        delay={0.2 * (i + 1)}
                        css={css({ display: `inline-block`, mt: 3 })}
                      >
                      </Reveal>
                    ))}
                  </Reveal>
                </Box>
                <Divider space={3} />
              </Flex>
            </ContentContainer>
          ))}
      </Box>
      
        <Reveal effect={reverse ? 'fadeInLeft' : 'fadeInRight'}>
          <ContentText content={text} />
          {buttons && (
            <>
              <ContentButtons content={buttons} />
            </>
          )}
        </Reveal>
      
    </Flex>
  </Container>
)

export default WithDefaultContent(TestimonialsBlock03)
