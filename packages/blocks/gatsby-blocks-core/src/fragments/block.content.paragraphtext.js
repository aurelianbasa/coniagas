import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockContentParagraphText on BlockContentParagraphText {
    text
    color
    space
    variant
    align
    weight
    underlineColor
    underlineWidth
    highlightColor
    wordScroll {
        ...BlockContentWordScrollText
    }
  }
`
