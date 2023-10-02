import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Tabs from '@solid-ui-components/Tabs'
import Data from '../../components/DatawrapperEmbed/DatawrapperEmbed'
import Photo from '@solid-ui-blocks/FeaturesWithPhoto/Block03'
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
      <Container variant='narrow'>
      <Tabs space={4} variant='pill'>
          <Data content={content['gravi-1']}/>
          <Photo content={content['gravi-2']} />
          <Photo content={content['gravi-3']} />
      </Tabs>
      </Container>
      <Divider space='5' />
      <Container variant='narrow'>
      <Tabs space={4} variant='pill'>
          <Data content={content['mhy-1']}/>
          <Photo content={content['mhy-2']} />
          <Photo content={content['mhy-3']} />
      </Tabs>
      </Container>
      <Divider space='5' />
      <Container variant='narrow'>
      <Tabs space={4} variant='pill'>
          <Data content={content['discovery-1']}/>
          <Photo content={content['discovery-2']} />
          <Photo content={content['discovery-3']} />
      </Tabs>
      </Container>
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
