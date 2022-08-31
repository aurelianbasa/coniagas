import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import ContentContainer from '@solid-ui-components/ContentContainer'
import Divider from '@solid-ui-components/Divider'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import styles from './_styles'

const CallToActionBlock02 = ({ content: { container, text, buttons } }) => (
  <Container>
    <ContentContainer content={container} variant='cards.paper'>
      <Flex
        sx={{
          flexDirection: [`column`, `row`],
          justifyContent: `space-between`,
          alignItems: `center`,
          textAlign: [`left`, `left`]
        }}
      >
        <Box sx={styles.featuresContainer}>
          <ContentText content={text} />
          <Divider space='2' />
        </Box>
        <ContentButtons content={buttons} />
      </Flex>
    </ContentContainer>
  </Container>
)

export default WithDefaultContent(CallToActionBlock02)
