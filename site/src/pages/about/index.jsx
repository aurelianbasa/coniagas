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
import Testimonials from '../../blocks/Quotes/Block03'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

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
      <Container variant='wide' sx={styles.heroContainer}>
        <Hero content={content['hero']} />
        <Divider space='7' />
      </Container>
      <Testimonials content={content['testimonials-1']} />
      <Divider space='2' />
      <Testimonials content={content['testimonials-2']} />
      <Divider space='2' />
      <Testimonials content={content['testimonials-3']} />
      <Divider space='2' />
      <Testimonials content={content['testimonials-4']} />
      <Divider space='2' />
      <Testimonials content={content['testimonials-5']} />
      <Divider space='2' />
      <Testimonials content={content['testimonials-6']} />
      <Divider space='2' />
      <Testimonials content={content['testimonials-7']} />
      <Divider space='2' />
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
