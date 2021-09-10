export interface BannerColors {
  background: string
  text: string
}

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
  banner: BannerColors
  error: string
  links: LinkColors
  paper: string
  separators: string
  text: TextColors
}

export interface ShadowStyle {
  xOffset: string
  yOffset: string
  blur: string
  spread?: string
  color: string
  inset?: boolean
}

export interface Shadows {
  banner: ShadowStyle
  buttons: ShadowStyle
  paper: ShadowStyle
}

export interface TextStyle {
  fontFamily: string
  fontSize: string
  fontStyle: 'normal' | 'italic'
  fontWeight: string
  letterSpacing: string
  textTransform: string
}

export interface Typography {
  paragraph: TextStyle
  paragraphEmphasis: TextStyle
  paragraphSmall: TextStyle
  paragraphSmallEmphasis: TextStyle
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
