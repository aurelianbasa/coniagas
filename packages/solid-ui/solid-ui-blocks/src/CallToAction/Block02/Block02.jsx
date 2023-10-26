import React from 'react'
import { Container, Flex } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentButtons from '@solid-ui-components/ContentButtons'
import Icon from '@solid-ui-components/ContentIcon'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  card: {
    width: `full`,
    bg: `beta`,
    height: `full`
  }
}


const CallToActionBlock02 = ({ content: { container, text, icon, buttons } }) => (
  <Container>
    <ContentContainer content={container} variant='cards.paper' sx={styles.card}>
        <Flex sx={{ flexWrap: `wrap` }} p='3'>
                    <Icon content={icon} size='md' mr='3' p='2' round />
                    <ContentText content={text} mb='2' />
                    <ContentButtons content={buttons}   mb='2' />
      </Flex>
    </ContentContainer>
  </Container>
)

export default WithDefaultContent(CallToActionBlock02)
