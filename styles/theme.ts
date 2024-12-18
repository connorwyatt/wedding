import { darken, lighten, saturate, transparentize } from 'polished'
import { DefaultTheme } from 'styled-components'
import { TextStyle } from './styled'

export const white = '#ffffff'
export const black = '#000000'
export const transparent = 'transparent'

const primaryColor = '#e895bc'

const standardShadowColor = transparentize(0.75, black)
const darkShadowColor = transparentize(0.5, black)

const paragraphFontFamily = '"Nunito Sans", sans-serif'
const paragraphText: TextStyle = {
  fontFamily: paragraphFontFamily,
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '300',
  letterSpacing: '0.075em',
  textTransform: 'uppercase',
}

const titleFontFamily = '"Flanella", cursive'
const titleText: TextStyle = {
  fontFamily: titleFontFamily,
  fontSize: '5rem',
  fontStyle: 'normal',
  fontWeight: '400',
  letterSpacing: 'normal',
  textTransform: 'none',
}

export const theme: DefaultTheme = {
  colors: {
    background: lighten(0.2, black),
    banner: {
      background: saturate(0.5, darken(0.3, primaryColor)),
      text: white,
    },
    error: '#db3131',
    links: {
      normal: primaryColor,
      focus: darken(0.1, primaryColor),
    },
    paper: darken(0.02, white),
    separators: transparentize(0.85, black),
    text: {
      primary: transparentize(0.3, black),
      secondary: transparentize(0.5, black),
    },
  },
  shadows: {
    banner: {
      xOffset: '0',
      yOffset: '-1rem',
      blur: '1rem',
      spread: '-1rem',
      color: darkShadowColor,
      inset: true,
    },
    buttons: {
      xOffset: '0',
      yOffset: '0.1rem',
      blur: '1rem',
      color: standardShadowColor,
    },
    paper: {
      xOffset: '0',
      yOffset: '0.25rem',
      blur: '1rem',
      color: darkShadowColor,
    },
  },
  typography: {
    paragraph: paragraphText,
    paragraphEmphasis: {
      ...paragraphText,
      fontWeight: '700',
    },
    paragraphSmall: { ...paragraphText, fontSize: '0.8rem' },
    paragraphSmallEmphasis: {
      ...paragraphText,
      fontSize: '0.8rem',
      fontWeight: '700',
    },
    sectionHeading: {
      ...paragraphText,
      fontSize: '1.5rem',
      fontWeight: '700',
      letterSpacing: '0.15em',
    },
    subtext: {
      ...paragraphText,
      fontSize: '0.9rem',
    },
    title: titleText,
  },
}
