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
import Primary from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Secondary from '@solid-ui-blocks/FeaturesWithPhoto/Block02'
import Tertiary from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Team from '@solid-ui-blocks/Teams/Block02'
import { normalizeBlockContentNodes } from '@blocks-helpers'

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
      <Divider space='6' />
      <Hero content={content['hero']} />
      <Divider space='4' />
      <Divider space='5' />
      <Primary content={content['primary']} />
      <Divider space='4' />
      <Secondary content={content['secondary']} />
      <Divider space='4' />
      <Tertiary content={content['tertiary']} />
      <Divider space='5' />
      <Divider space='4' />
      <Divider space='5' />
      <Team content={content['team']} />
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
