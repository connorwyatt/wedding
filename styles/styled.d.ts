export interface LinkColors {
  normal: string
  focus: string
}

export interface TextColors {
  primary: string
  secondary: string
}

export interface Colors {
  background: string
  links: LinkColors
  paper: string
  text: TextColors
}

export interface ShadowStyle {
  xOffset: string
  yOffset: string
  blur: string
  color: string
}

export interface Shadows {
  buttons: ShadowStyle
  paper: ShadowStyle
}

export interface TextStyle {
  fontFamily: string
  fontSize: string
  fontStyle: 'normal' | 'italic'
  fontWeight: string
  letterSpacing: string
}

export interface Typography {
  paragraph: TextStyle
  paragraphEmphasis: TextStyle
  sectionHeading: TextStyle
  subtext: TextStyle
  title: TextStyle
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    shadows: Shadows
    typography: Typography
  }
}
