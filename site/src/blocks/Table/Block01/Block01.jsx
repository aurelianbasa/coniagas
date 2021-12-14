import React from 'react'
import { Container, Flex, Box, Card, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Divider from '@solid-ui-components/Divider'
import ContentText from '@solid-ui-components/ContentText'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  row: {
    display: [`block`, `flex`],
    '& + &': {
      borderTopStyle: `solid`,
      borderTopWidth: `md`,
      borderTopColor: `omegaLight`,
      pt: [2, 0],
      mt: [2, 0]
    }
  },
  item: {
    flexBasis: `1/2`,
    py: [2, 3],
    m: 0,
    '& + &': {
      borderLeftStyle: [`none`, `solid`],
      borderLeftWidth: `sm`,
      borderLeftColor: `omega`,
      pl: [0, 4]
    }
  }
}
const ContentTable01 = ({ content: { text, collection, buttons } }) => (
  <Container>
    <Box sx={{ textAlign: `center` }}>
      <ContentText content={text} />
    </Box>
    <Divider />
    <Card variant='paper'>
      {collection?.map(({ collection }, i) => (
        <Box key={`item-${i}`} sx={styles.row}>
          {collection?.map(({ text }, i) => (
            <Box sx={styles.item}>
              <ContentText content={text} />
            </Box>
          ))}
        </Box>
      ))}
    </Card>
    {buttons && (
      <>
        <Divider space={3} />
        <Reveal
          effect='fadeInRight'
          delay={1}
          css={css({ mb: [4, null, null, 0] })}
        >
          <ContentButtons content={buttons} />
        </Reveal>
      </>
    )}
  </Container>
)

export default WithDefaultContent(ContentTable01)
