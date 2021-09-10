import styled from 'styled-components'
import { boxShadow } from 'styles/helpers'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 40rem;
  padding: 1rem;
`

export const Paper = styled.div`
  ${({ theme }) => boxShadow(theme.shadows.paper)};
  background-image: url('/images/sakura-branch.png'), url('/images/white-card-stock-paper-texture.png');
  background-position: top 4rem left -4rem, top;
  background-repeat: no-repeat, repeat;
  background-size: 40rem, 100%;
  border-radius: 1px;
  overflow: hidden;
`
