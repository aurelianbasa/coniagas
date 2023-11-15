import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import Table from '../../blocks/Table/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Contact from '../../blocks/Form/Block01'
import CalendlyButton from '../../components/CalendlyButton/CalendlyButton'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const AboutPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='About' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='wide' sx={styles.heroContainer}>
      <Contact content={content['contact']} />
      <Divider space='3' />
      </Container>
      <Table content={content['stock-information-table']} />
      <Divider space='5' />
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteContactBlockContent {
    allBlockContent(filter: { page: { in: ["site/contact", "site/shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default AboutPage
