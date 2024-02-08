import React from 'react'
import { LanguageContext } from '../../../../../../packages/solid-ui/solid-ui-layout/src/Layout/LanguageContext';


const getToggleDisplayValues = (lang, location) => {
  let text = "En"
  let pathname = "#"
  
  if (location) {
    if (lang === 'en') {
      text = "Fr"
      pathname = `/fr${location.pathname}`
    } else if (lang === 'fr') {
      text = "En"
      pathname = location.pathname.replace('/fr/', '/')
    } else {
      throw Error(`Failed to resolve language '${lang}'`);
    }
  }
  return {text, pathname}
}

const LanguageToggle = ({ location }) => {
  const language = React.useContext(LanguageContext);
  const { text, pathname } = getToggleDisplayValues(language, location);
  return (
    <>
      <a href={pathname} style={{ textDecoration: "none", color: "unset" }} >
        {text}
      </a>
    </>
  );
}

export default LanguageToggle
