import { css, SimpleInterpolation } from 'styled-components'
import { TextStyle } from '../styled'

export const textStyle = (style: TextStyle): SimpleInterpolation => css`
  font-family: ${style.fontFamily};
  font-size: ${style.fontSize};
  font-style: ${style.fontStyle};
  font-weight: ${style.fontWeight};
  letter-spacing: ${style.letterSpacing};
  text-transform: ${style.textTransform};
`
