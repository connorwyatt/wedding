import styled from 'styled-components'
import { PaddedContainer } from './PaddedContainer.styles'
import { boxShadow, textStyle } from 'styles/helpers'

export const Container = styled(PaddedContainer)`
  ${({ theme }) => boxShadow(theme.shadows.banner)};
  ${({ theme }) => textStyle(theme.typography.paragraphEmphasis)};
  background-color: ${({ theme }) => theme.colors.banner.background};
  color: ${({ theme }) => theme.colors.banner.text};
  text-align: right;
`
