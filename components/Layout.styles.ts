import styled from 'styled-components'
import { boxShadow } from 'styles/helpers'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 40rem;
  padding: 1rem;
`

export const Paper = styled.div`
  ${({ theme }) => boxShadow(theme.shadows.paper)};
  background-image: url('/images/white-card-stock-paper-texture.png');
  border-radius: 1px;
  overflow: hidden;
`
