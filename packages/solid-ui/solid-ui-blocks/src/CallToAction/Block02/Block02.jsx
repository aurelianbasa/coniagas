import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  card: {
    overflow: `hidden`,
    bg: `omegaDark`,
    height: `full`
  }
}


const CallToActionBlock02 = ({ content: { container, text, buttons } }) => (
  <Container>
    <ContentContainer content={container} variant='cards.paper' sx={styles.card}>
      <Flex
        sx={{
          flexDirection: [`column`, `row`],
          justifyContent: `space-between`,
          alignItems: `center`,
          textAlign: [`left`, `left`]
        }}
      >
        <Box>
          <ContentText content={text} />
        </Box>
        <ContentButtons content={buttons} 
        sx={{
          alignItems: `right`
        }}
        />
      </Flex>
    </ContentContainer>
  </Container>
)

export default WithDefaultContent(CallToActionBlock02)
