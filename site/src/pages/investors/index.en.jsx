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
import styles from './_styles'

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
      <Header content={content['header']} location={props.location} />
      <Divider space='5' />
      <Divider space='5' />
      <StockChart content={content['stock-information-chart']} />
      <Divider space='5' />
      <Download content={content['download-2']} />
      <Divider space='5' />
      <Container variant='wide' sx={styles.heroContainer}>
      <Table content={content['capital-structure']} />
      <Divider space='5' />
      </Container>
      <Divider space='5' />
      <Content content={content['analyst-intro']} />
      <Divider space='1' />
      <Table content={content['analyst-coverage']} />
      <Divider space='5' />
      <Download content={content['download']} />
      <Divider space='5' />
      <Divider space='5' />
      <Download content={content['fmv']} />
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allBlockContent(
      filter: { page: { in: ["site/en/investors", "site/en/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default MediaPage
