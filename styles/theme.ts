import { darken, lighten, transparentize } from 'polished'
import { DefaultTheme } from 'styled-components'
import { TextStyle } from './styled'

export const white = '#ffffff'
export const black = '#000000'
export const transparent = 'transparent'

const darkShadowColor = transparentize(0.5, black)

const paragraphFontFamily = '"Nunito Sans", sans-serif'
const paragraphText: TextStyle = {
  fontFamily: paragraphFontFamily,
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '200',
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
    background: lighten(0.075, black),
    paper: darken(0.02, white),
  },
  shadows: {
    paper: {
      xOffset: '0',
      yOffset: '0.25rem',
      blur: '0.5rem',
      color: darkShadowColor,
    },
  },
  typography: {
    paragraph: paragraphText,
    paragraphEmphasis: {
      ...paragraphText,
      fontWeight: '400',
    },
    sectionHeading: {
      ...paragraphText,
      fontSize: '1.5rem',
      fontWeight: '200',
    },
    title: titleText,
  },
}
