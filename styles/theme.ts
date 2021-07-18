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
  fontSize: '5rem',
  fontStyle: 'normal',
  fontWeight: '400',
  letterSpacing: 'normal',
}

export const theme: DefaultTheme = {
  colors: {
    background: '#111111',
    paper: '#FAFAFA',
  },
  typography: {
    paragraph: paragraphText,
    title: titleText,
  },
}
