import React from 'react'
import { Global } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider, Flex, Box, css } from 'theme-ui'
import theme from '@elegantstack/flow-ui-theme/src/theme'
import Divider from '@components/Divider'
import Header from '@solid-ui-blocks/Header/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import pageContextProvider from '@helpers/pageContextProvider'
import { normalizeBlockContentNodes } from '@blocks-helpers'

export const Layout = ({ children, pageContext, location }) => {
  const { allBlockContent } = useStaticQuery(headerQuery)
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <ThemeProvider theme={theme}>
      <pageContextProvider.Provider value={{ pageContext, location }}>
        <Flex variant='layout.layout'>
          <Global styles={css(theme => theme.global)} />
          <Header content={content['header']} />
          <Divider space={5} />
          <Divider space={5} />
          <Box variant='layout.body'>{children}</Box>
          <Divider space={5} />
          <Divider space={4} />
          <Footer content={content['footer']} />
        </Flex>
      </pageContextProvider.Provider>
    </ThemeProvider>
  )
}

const headerQuery = graphql`
  query blogLayoutBlockContent {
    allBlockContent(filter: { page: { in: ["site/en/shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
