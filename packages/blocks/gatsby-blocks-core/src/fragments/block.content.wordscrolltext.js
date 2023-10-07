import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockContentWordScrollText on BlockContentWordScrollText {
    text
    color
    space
    variant
    align
    underlineColor
    highlightColor
  }
`