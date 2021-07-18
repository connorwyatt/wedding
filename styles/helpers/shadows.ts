import { getValueAndUnit } from 'polished'
import { css, SimpleInterpolation } from 'styled-components'
import { ShadowStyle } from '../styled'

export const boxShadow = ({ blur, xOffset, yOffset, color }: ShadowStyle): SimpleInterpolation => css`
  box-shadow: ${xOffset} ${yOffset} ${blur} ${color};
`

export const dropShadow = ({ blur, xOffset, yOffset, color }: ShadowStyle): SimpleInterpolation => {
  const [blurValue, blurUnit]: [number, string] = getValueAndUnit(blur)
  const [xOffsetValue, xOffsetUnit]: [number, string] = getValueAndUnit(xOffset)
  const [yOffsetValue, yOffsetUnit]: [number, string] = getValueAndUnit(yOffset)

  return css`
    filter: drop-shadow(
      ${xOffsetValue * 1.5}${xOffsetUnit} ${yOffsetValue * 1.5}${yOffsetUnit} ${blurValue / 2}${blurUnit} ${color}
    );
  `
}
