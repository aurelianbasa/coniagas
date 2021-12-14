import baseColors from '@elegantstack/solid-ui-theme/src/colors'
import preset from '@elegantstack/solid-ui-theme/src/color-preset'

const red = {
  100: '#FADDCF',
  200: '#F6B5A1',
  300: '#E6816F',
  400: '#CE5148',
  500: '#AE181C',
  600: '#951120',
  700: '#7D0C23',
  800: '#640722',
  900: '#530422'
}

const colors = {
  ...baseColors,
  alphaLighter: preset.blueGray[100],
  alphaLight: preset.blueGray[300],
  alpha: preset.blueGray[600],
  alphaDark: preset.blueGray[800],
  alphaDarker: preset.blueGray[900],
  betaLighter: red[100],
  betaLight: red[300],
  beta: red[600],
  betaDark: red[800],
  betaDarker: red[900]
}

export default colors
