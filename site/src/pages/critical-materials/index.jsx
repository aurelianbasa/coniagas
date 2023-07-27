import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Content from '@solid-ui-blocks/Content/Block02'
import Gallery from '../../blocks/Blog/Block01'

import Comparison from '../../blocks/FeaturesWithPhoto/Block06'
import Stats from '../../blocks/Features/Block06'

import FeatureTabOne from '@solid-ui-blocks/FeaturesWithPhoto/Block05'
import FeatureTabTwo from '@solid-ui-blocks/FeaturesWithPhoto/Block06'

import FeatureOne from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import FeatureTwo from '@solid-ui-blocks/FeaturesWithPhoto/Block02'

import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const Services03 = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Critical Materials' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Container variant='wide' sx={styles.heroContainer}>
        <Content content={content['hero']} />
        <Divider space='3' />
        <Gallery content={content['gallery']} />
      </Container>
      <Divider space='5' />

      <Container variant='wide' sx={styles.tabsConfeaturesContainer}>
        <FeatureTabOne content={content['feature-tab-one']} reverse />
        <Divider space='4' />
        <FeatureTabTwo content={content['feature-tab-two']} />
      </Container>

      <Divider space='5' />

      <Divider space='5' />
      <Comparison content={content['comparison']} />
      <Divider space='5' />
      <Stats content={content['stats']} />
      <Divider space='5' />

      <Divider space='5' />

      <FeatureOne content={content['feature-one']} reverse />
      <Divider space='5' />
      <Divider space='5' />
      <FeatureTwo content={content['feature-two']} />
      <Divider space='6' />
      <Divider space='6' />

      <Divider space='4' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query innerpageSiteCriticalMaterialsBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/critical-materials", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Services03
