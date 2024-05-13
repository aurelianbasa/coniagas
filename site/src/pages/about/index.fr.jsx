import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import Intro from '@solid-ui-blocks/Hero/Block02'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block02'
import CustomTextBlock from '../../blocks/CustomText/CustomTextBlock'
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
      <Header content={content['header']} location={props.location} />
      <Divider space='6' />
      <Container variant='wide' sx={styles.heroContainer}>
      <Divider space='1' />
        <Hero content={content['hero']} />
        <Divider space='3' />
      <Intro content={content['intro']} />
      </Container>
      <Divider space='4' />
      <Container variant='wide' sx={styles.newContainer}>
      <CustomTextBlock content={content['title']} />
      <Divider space='3' />
      <Testimonials content={content['testimonials-1']} />
      <Divider space='2' />
      <Testimonials content={content['testimonials-2']} />
      <Divider space='2' />
      <Testimonials content={content['testimonials-3']} />
      <Divider space='2' />
      <Testimonials content={content['testimonials-4']} />
      <Divider space='2' />
      <Testimonials content={content['testimonials-7']} />
      </Container>
      <Divider space='5' />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allBlockContent(filter: { page: { in: ["site/fr/about", "site/fr/shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default AboutUs02
