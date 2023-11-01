import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Primary from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Buttons from '@solid-ui-blocks/Features/Block05'
import Hero from '@solid-ui-blocks/Hero/Block01'
import Intro from '@solid-ui-blocks/Hero/Block02'
import Data from '../components/DatawrapperEmbed/DatawrapperEmbed'
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
      <Divider space='3' />
      <Container variant='wide' sx={styles.heroContainer}>
      <Hero content={content['hero']} />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Divider space='5' />
      <Primary content={content['primary']} reverse />
      <Divider space='4' />
      <Intro content={content['intro']} />
      <Divider space='4' />
      <Buttons content={content['buttons']} />
      <Divider space='4' />
      <Container sx={styles.tabsContainer}>
      <Divider space='4' />
      <Data content={content['data-2']}/>
      <Divider space='4' />
      </Container>
      <Divider space='4' />
      <Container sx={styles.tabsContainer}>
      <Data content={content['data-3']}/>
      <Divider space='4' />
      </Container>
      <Divider space='4' />
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
