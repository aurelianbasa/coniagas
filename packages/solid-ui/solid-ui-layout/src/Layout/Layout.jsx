import {React , useEffect } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider, merge, Flex, Box, css } from 'theme-ui'
import baseTheme from '@solid-ui-theme'
import pageContextProvider from '@helpers/pageContextProvider'
import { FormContextProvider } from '@solid-ui-components/ContentForm'
import { ModalContextProvider } from '@solid-ui-components/Modal'
import { TabsContextProvider } from '@solid-ui-components/Tabs'
import { LanguageContext } from './LanguageContext'


const detectLanguageFromPath = (pathname) => {
  if (/^\/[a-z]{2}(\-[A-Z]{2})?\//.test(pathname)) {
    if (pathname.startsWith("/fr/")) {
      return "fr";
    } else {
      throw Error(`Could not detect language from path ${pathname}`);
    }
  } else {
    return "en";
  }
}

const Layout = ({ children, pageContext = {}, location, theme = {} }) => {
  const language = detectLanguageFromPath(location.pathname);
  return (
    <ThemeProvider theme={merge(baseTheme, theme)}>
      <LanguageContext.Provider value={language}>
        <pageContextProvider.Provider value={{ pageContext, location }}>
          <FormContextProvider>
            <ModalContextProvider>
              <TabsContextProvider>
                <Flex variant='layout.layout'>
                  <Global styles={css(theme => theme.global)} />
                  <Box variant='layout.body'>{children}</Box>
                </Flex>
              </TabsContextProvider>
            </ModalContextProvider>
          </FormContextProvider>
        </pageContextProvider.Provider>
      </LanguageContext.Provider>
    </ThemeProvider>
  )
}

export default Layout
