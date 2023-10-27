import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockContentJuxtapose on BlockContentJuxtapose {
    srcImg1
    labelImg1
    srcImg2
    labelImg2
    height
  }
`
