import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion'
import { Container, Box, Flex } from 'theme-ui'
import Divider from '@solid-ui-components/Divider'
import ContentButtons from '@solid-ui-components/ContentButtons'
import ContentText from '@solid-ui-components/ContentText'
import Icon from '@solid-ui-components/ContentIcon'
import ContentContainer from '@solid-ui-components/ContentContainer'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const styles = {
  container: {
    position: `relative`,
    overflow: `hidden`,
    width: `100%`,
    maxWidth: 735,
    mx: `auto`,
    pt: `56.25% ` /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  },
  iframe: {
    position: `absolute`,
    top: `0`,
    left: `0`,
    bottom: `0`,
    right: `0`,
    width: `100%`,
    height: `100%`
  },
  accordion: {
    '.accordion__button': {
      cursor: `pointer`,
      position: `relative`,
      outline: `none`,
      transition: `all 0.15s ease-in`
    },
    '.accordion__button:hover': {
      opacity: 0.75,
      '&::before': {
        borderColor: `beta`
      }
    },
    '.accordion__button::before': {
      content: `' '`,
      width: `10px`,
      height: `10px`,
      marginRight: `12px`,
      borderBottom: `3px solid currentColor`,
      borderLeft: `3px solid currentColor`,
      position: `absolute`,
      right: 4,
      top: `50%`,
      transform: `translate(0, -50%) rotate(45deg)`,
      transition: `all 0.15s ease-in`
    },
    '.accordion__button[aria-expanded="true"]::before, .accordion__button[aria-selected="true"]::before':
      {
        transform: `translate(0, -50%) rotate(-45deg)`,
        transition: `transform 0.35s ease-in`
      },
    '[hidden]': {
      display: `none`
    },
    '.accordion__panel': {
      animation: `fadeIn 0.25s ease-in`
    },
    '@keyframes fadeIn': {
      '0%': {
        opacity: 0.5,
        transform: 'translate(0, -15%)'
      },
      '100%': {
        opacity: 1,
        transform: 'translate(0, 0%)'
      }
    }
  }
}

const DrillHolesMapBlock01 = ({
  content: { container, text, icon, buttons }
}) => {
  return (
    <Container>
      <Box sx={styles.accordion}>
        <Accordion>
          <ContentContainer content={container} variant='cards.primary'>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <Flex sx={{ alignItems: `center` }} p='3'>
                    <Icon content={icon} size='xs' mr='3' p='2' round />
                    <ContentText content={text?.[0]} mb='0' pr='5' />
                  </Flex>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <Box sx={styles.container}>
                  <iframe style={styles.iframe} src={text[1]?.text} />
                </Box>
                <Divider space={3} />
                <ContentText content={text?.[2]} mb='0' pr='5' />
              </AccordionItemPanel>
            </AccordionItem>
          </ContentContainer>
        </Accordion>
      </Box>
      {buttons && (
        <Box sx={{ textAlign: `center` }}>
          <Divider space={3} />
          <ContentButtons content={buttons} />
        </Box>
      )}
    </Container>
  )
}

export default WithDefaultContent(DrillHolesMapBlock01)
