import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Content from '@solid-ui-blocks/Content/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Faq from '@solid-ui-blocks/Faq/Block02'
import Table from '../../blocks/Table/Block01'
import StockChart from '../../blocks/StockChart/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import Download from '@solid-ui-blocks/CallToAction/Block02'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const MediaPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Investors' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <StockChart content={content['stock-information-chart']} />
      <Table content={content['stock-information-table']} />
      <Divider space='5' />
      <Divider space='5' />
      <Table content={content['capital-structure']} />
      <Divider space='5' />
      <Divider space='5' />
      <Content content={content['presentations']} />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='narrow'>
      <Download content={content['download']} />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Faq content={content['faq']} />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteInvestorsBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/investors", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default MediaPage
