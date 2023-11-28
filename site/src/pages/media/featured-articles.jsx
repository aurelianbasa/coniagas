import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Cards from '@solid-ui-blocks/Blog/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const MediaPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Featured Articles' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Cards content={content['featured-articles-1']} />
      <Divider space='1' />
      <Cards content={content['featured-articles-2']} />
      <Divider space='5' />
      <Cards content={content['featured-articles-3']} />
      <Divider space='1' />
      <Cards content={content['featured-articles-4']} />
      <Divider space='5' />


      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteMediaFeaturedArticlesBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/media/featured-articles", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default MediaPage
