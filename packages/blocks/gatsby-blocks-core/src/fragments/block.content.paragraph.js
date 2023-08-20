import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockContentParagraph on BlockContentParagraph {
    paragraphtext {
      ...BlockContentParagraphText
    }
    color
    space
    variant
    align
  }
`