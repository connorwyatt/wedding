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
    typography: Typography
  }
}
