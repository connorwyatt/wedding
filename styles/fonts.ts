import { fontFace } from 'polished'
import { css } from 'styled-components'

export const fonts = css`
  ${fontFace({
    fontFamily: 'Flanella',
    fontFilePath: '/fonts/flanella',
    fontWeight: '400',
    fontStyle: 'normal',
    fileFormats: ['ttf'],
  })};
`
