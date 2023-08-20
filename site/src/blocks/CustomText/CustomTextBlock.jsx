import React from 'react'
import { Container, Flex, Box, css } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import CustomText from '../../components/CustomText/CustomText'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'

const CustomTextBlock = ({ content: { paragraph } }) => {
  const { align, color, variant, space } = paragraph

  return (
  <Container>
      <Reveal effect='fadeInLeft'>
        <Box sx={{ textAlign: ['center', 'left'] }}>
          {paragraph.paragraphtext && (
            <CustomText content={paragraph.paragraphtext} align={align} color={color} variant={variant} space={space} />
          )}
          </Box>
      </Reveal>
  </Container>
)}

export default WithDefaultContent(CustomTextBlock)
