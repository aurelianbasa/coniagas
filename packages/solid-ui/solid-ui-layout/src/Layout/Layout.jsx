import {React , useState } from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider, merge, Flex, Box, css } from 'theme-ui'
import baseTheme from '@solid-ui-theme'
import pageContextProvider from '@helpers/pageContextProvider'
import { FormContextProvider } from '@solid-ui-components/ContentForm'
import { ModalContextProvider } from '@solid-ui-components/Modal'
import { TabsContextProvider } from '@solid-ui-components/Tabs'
import {LanguageContext} from './LanguageContext'
import LanguageToggle from './LanguageToggle'

const Layout = ({ children, pageContext = {}, location, theme = {} }) => {
  const { language, setLanguage } = useState('en');

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
                  <LanguageToggle onClick={() =>
                    {setLanguage(language === 'en' ? 'fr' : 'en')}
                  } />
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
