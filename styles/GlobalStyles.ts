import { createGlobalStyle } from 'styled-components'
import { REM_IN_PIXELS } from './RemInPixels'
import { fonts } from './fonts'
import { textStyle } from './helpers'
import { reset } from './reset.styles'

export const GlobalStyles = createGlobalStyle`
  ${reset};

  ${fonts};

  * {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch
  }

  html {
    font-size: ${REM_IN_PIXELS}px;
    min-height: 100vh;
  }

  body {
    ${({ theme }) => textStyle(theme.typography.paragraph)};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.5;
    min-height: 100vh;
    text-transform: uppercase;
  }
`
