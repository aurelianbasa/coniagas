import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockContentCalendlyButton on BlockContentCalendlyButton {
    text
    link
    variant
  }
`
