import styled from 'styled-components'
import { PaddedContainer } from './PaddedContainer.styles'
import { boxShadow } from 'styles/helpers'

export const Container = styled(PaddedContainer)`
  ${({ theme }) => boxShadow(theme.shadows.banner)};
  background-color: ${({ theme }) => theme.colors.banner.background};
  color: ${({ theme }) => theme.colors.banner.text};
`
