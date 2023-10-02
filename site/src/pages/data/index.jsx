import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Tabs from '@solid-ui-components/Tabs'
import Data from '../components/DatawrapperEmbed/DatawrapperEmbed'
import CrossSectionOne from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import CrossSectionTwo from '@solid-ui-blocks/FeaturesWithPhoto/Block07'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const DataPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Data' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Tabs space={4} variant='pill'>
          <Data content={content['discovery-1']}/>
          <CrossSectionOne content={content['discovery-2']} reverse />
          <CrossSectionTwo content={content['discovery-3']} />
      </Tabs>
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteDataBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/data", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default DataPage
