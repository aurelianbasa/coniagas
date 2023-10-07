import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Info from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Download from '@solid-ui-blocks/CallToAction/Block02'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import CustomTextBlock from '../../blocks/CustomText/CustomTextBlock'
import JuxtaposeImage from '../../components/JuxtaposeImage/JuxtaposeImage'
import DatawrapperEmbed from '../../components/DatawrapperEmbed/DatawrapperEmbed'
import CalendlyButton from '../../components/CalendlyButton/CalendlyButton'

const ProjectItemPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Coniagas Project' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Info content={content['overview']} />
      <Divider space='4' />
      <CustomTextBlock content={content['custom-text-test']} />
      <Divider space='5' />
      <JuxtaposeImage content={content['juxtapose-test']} />
      <Divider space='5' />
      <DatawrapperEmbed content={content['data-embed']}/>
      <Divider space='5' />
      <Container variant='narrow'>
        <Info content={content['info-1']} reverse />
        <Divider space='5' />
        <Info content={content['info-2']} />
        <Divider space='5' />
        <CalendlyButton />
        <Divider space='5' />
        <Download content={content['download']} />
      </Container>
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteProjectsConiagasBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/projects/coniagas", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default ProjectItemPage
