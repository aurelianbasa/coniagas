import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockContentLink on BlockContentLink {
    type
    url
  }
`
