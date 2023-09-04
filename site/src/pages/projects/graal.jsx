import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import DrillMap from '../../blocks/DrillHolesMap/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Info from '@solid-ui-blocks/FeaturesWithPhoto/Block05'
import Location from '@solid-ui-blocks/FeaturesWithPhoto/Block03'
import Download from '@solid-ui-blocks/CallToAction/Block02'
import Milestones from '@solid-ui-blocks/Features/Block01'
import Stats from '@solid-ui-blocks/Stats/Block01'
import Results from '@solid-ui-blocks/FeaturesWithPhoto/Block04'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const ProjectItemPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='The Graal Project' />
      {/* Modals */}
      <ModalSimple content={content['privacy-policy']} />
      <ModalSimple content={content['disclaimer']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Info content={content['overview']} />
      <Divider space='2' />
      <Download content={content['download']} />
      <Divider space='4' />
      <Milestones content={content['milestones-1']} />
      <Divider space='5' />
      <Container variant='wide'>
      <DrillMap content={content['drill-map']} />
      </Container>
      <Container>
      
        <Divider space='5' />
        <Info content={content['info-3']} reverse />
        <Divider space='5' />
        </Container>
      <Stats content={content['stats']} />
      <Divider space='5' />
      <Container variant='narrow'>
        <Info content={content['info-1']} reverse />
        <Divider space='5' />
        <Info content={content['info-2']} />
        <Divider space='5' />
      </Container>
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query siteProjectsGraalBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/projects/graal", "site/shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default ProjectItemPage
