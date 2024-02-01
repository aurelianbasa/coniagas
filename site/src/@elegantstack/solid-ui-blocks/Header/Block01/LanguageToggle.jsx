import React from 'react'

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
  const language = location ? detectLanguageFromPath(location.pathname) : null;
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
