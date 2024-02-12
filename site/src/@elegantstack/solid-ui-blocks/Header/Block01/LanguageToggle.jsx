import React from 'react'
import { LanguageContext } from '../../../../../../packages/solid-ui/solid-ui-layout/src/Layout/LanguageContext';


const FR_ICON = "/icons/quebec.png"
const EN_ICON = "/icons/canada.png"

const getToggleDisplayValues = (lang, location) => {
  let caption = "English"
  let pathname = "#"
  let iconSrc = EN_ICON
  
  if (location) {
    if (lang === 'en') {
      caption = "Français"
      pathname = `/fr${location.pathname}`
      iconSrc = FR_ICON
    } else if (lang === 'fr') {
      caption = "English"
      pathname = location.pathname.replace('/fr/', '/')
      iconSrc = EN_ICON
    } else {
      throw Error(`Failed to resolve language '${lang}'`);
    }
  }
  return {caption, pathname, iconSrc}
}

const LanguageToggle = ({ location }) => {
  const language = React.useContext(LanguageContext);
  const { caption, pathname, iconSrc } = getToggleDisplayValues(language, location);
  console.log(iconSrc)
  return (
    <>
      <a href={pathname} style={{
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        textDecoration: "none", 
        color: "unset" 
        }} >
        <img src={iconSrc} alt={caption} style={{ width: '20px', height: 'auto' }} />
      </a>
    </>
  );
}

export default LanguageToggle
