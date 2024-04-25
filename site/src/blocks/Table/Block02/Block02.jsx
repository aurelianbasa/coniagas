import React from 'react';
import { Container, Flex, Box, Card, css } from 'theme-ui';
import Reveal from '@solid-ui-components/Reveal';
import Divider from '@solid-ui-components/Divider';
import ContentText from '@solid-ui-components/ContentText';
import ContentButtons from '@solid-ui-components/ContentButtons';
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'space-between', // Aligns children (Box, Buttons) across the main axis with space between
    alignItems: 'center', // Center items vertically
    flexWrap: 'wrap', // Allows items to wrap if not enough space
    '& + &': {
      borderTopStyle: 'solid',
      borderTopWidth: 'md',
      borderTopColor: 'omegaLight',
      pt: [2, 0],
      mt: [2, 0]
    }
  },
  item: {
    py: [2, 3],
    m: 0,
    '& + &': {
      pl: [0, 4] // Spacing between items in a row
    }
  }
};

const ContentTable02 = ({ content: { text, collection, buttons } }) => (
  <Container>
    <Box sx={{ textAlign: 'center' }}>
      <ContentText content={text} />
    </Box>
    <Divider />
    <Card variant='paper'>
      <Flex sx={styles.row}>
        {collection?.map(({ collection }, i) => (
          <React.Fragment key={`collection-${i}`}>
            {collection?.map(({ text }, j) => (
              <Box key={`item-${i}-${j}`} sx={styles.item}>
                <ContentText content={text} />
              </Box>
            ))}
          </React.Fragment>
        ))}
        {buttons && (
          <Reveal
            effect='fadeInRight'
            delay={1}
            css={css({ ml: 'auto', my: [2, 3] })} // Automatically margin to push to the right
          >
            <ContentButtons content={buttons} />
          </Reveal>
        )}
      </Flex>
    </Card>
  </Container>
);

export default WithDefaultContent(ContentTable02);
