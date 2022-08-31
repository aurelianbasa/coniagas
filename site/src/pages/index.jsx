import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Tabs from '@solid-ui-components/Tabs'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block01'
import Screenshot from '@solid-ui-blocks/FeaturesWithPhoto/Block03'
import Technology from '@solid-ui-blocks/Hero/Block01'
import Download from '../blocks/CallToAction/Block02'
import Primary from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Secondary from '@solid-ui-blocks/FeaturesWithPhoto/Block02'
import Tertiary from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Blog from '@solid-ui-blocks/Blog/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import WithRecentPosts from '@solid-ui-blocks/WithRecentPosts'
import theme from './_theme'
import styles from './_styles'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Hero content={content['hero']} reverse />
      <Divider space='5' />
        <Technology content={content['technology']} />
      <Divider space='5' />
      <Container sx={styles.featuresContainer}>
      <Download variant='wide' content={content['download']} />
      </Container>
      <Divider space='5' />
      <Primary content={content['primary']} />
      <Divider space='4' />
      <Secondary content={content['secondary']} reverse />
      <Divider space='4' />
      <Tertiary content={content['tertiary']} />
      <Divider space='5' />
      <Container variant='wide' sx={styles.tabsContainer}>
        <Tabs space={3} variant='dots' position='bottom' arrows>
          <Screenshot content={content['screenshot-one']} />
          <Screenshot content={content['screenshot-two']} />
          <Screenshot content={content['screenshot-three']} />
        </Tabs>
        </Container>
      <Divider space='5' />
      <WithRecentPosts>
        <Blog content={content['latest-blogs']} />
      </WithRecentPosts>
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query homepageSiteIndexContent {
    allBlockContent(filter: { page: { in: ["site/index", "site/shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default IndexPage
