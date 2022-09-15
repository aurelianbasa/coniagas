import React from 'react'
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import Counter from '@solid-ui-components/Counter'
import ContentContainer from '@solid-ui-components/ContentContainer'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const FeaturesBlock06 = ({ 
  content: { text, collection, buttons } }) => (
  <Container sx={{ textAlign: `center` }}>
    <Box>
      <ContentText content={text} />
    </Box>
    {collection && (
      <>
        <Divider />
        <Reveal effect='fadeInDown'>
          <Flex sx={{ justifyContent: `center`, flexWrap: `wrap`, m: -3 }}>
            {collection.map(({ container, text }, index) => (
              <Box
                key={`item-${index}`}
                sx={{ flexBasis: [`1/2`], p: 3 }}
              >
                <ContentContainer content={container}>
                <Reveal effect='fadeInGrow' delay={0.2 * (index + 2)}>
                <ContentText content={text}>
                  
                  <Counter from='0' to={text?.[1]?.text} duration={4} />
                
                  <Counter from='0' to={text?.[4]?.text} duration={4} />
          
                </ContentText>
                </Reveal>
                </ContentContainer>
              </Box>
              
            ))}
          </Flex>
        </Reveal>
      </>
    )}
    {buttons && (
      <>
        <Divider space={3} />
        <ContentButtons content={buttons} />
      </>
    )}
  </Container>
)

export default WithDefaultContent(FeaturesBlock06)
