import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block02'
import Secondary from '@solid-ui-blocks/FeaturesWithPhoto/Block02'
import Tertiary from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Team from '@solid-ui-blocks/Teams/Block02'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const AboutUs02 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Container variant='wide' sx={styles.heroContainer}>
        <Hero content={content['hero']} />
        <Divider space='6' />
      </Container>
      <Divider space='5' />
      <Secondary content={content['mission']} />
      <Divider space='4' />
      <Team content={content['team']} />
      <Divider space='5' />
      <Tertiary content={content['sustainability']} />
      <Divider space='5' />
      <Divider space='4' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query innerpageSiteAboutBlockContent {
    allBlockContent(filter: { page: { in: ["site/about", "site/shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default AboutUs02
