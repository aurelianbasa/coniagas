import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockContentCalendlyButton on BlockContentCalendlyButton {
    text
    url
    variant
  }
`
