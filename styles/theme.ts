import { DefaultTheme } from 'styled-components'
import { TextStyle } from './styled'

const paragraphFontFamily = '"Nunito Sans", sans-serif'
const paragraphText: TextStyle = {
  fontFamily: paragraphFontFamily,
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '400',
  letterSpacing: '0.25em',
}

const titleFontFamily = '"Flanella", cursive'
const titleText: TextStyle = {
  fontFamily: titleFontFamily,
  fontSize: '4rem',
  fontStyle: 'normal',
  fontWeight: '400',
  letterSpacing: 'normal',
}

export const theme: DefaultTheme = {
  typography: {
    paragraph: paragraphText,
    title: titleText,
  },
}
