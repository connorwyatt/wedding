export interface Colors {
  background: string
  paper: string
}

export interface ShadowStyle {
  xOffset: string
  yOffset: string
  blur: string
  color: string
}

export interface Shadows {
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
  title: TextStyle
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    shadows: Shadows
    typography: Typography
  }
}
