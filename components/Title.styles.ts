import styled from 'styled-components'
import { textStyle } from 'styles/helpers'

export const Container = styled.div`
  ${({ theme }) => textStyle(theme.typography.title)};
  line-height: 1;
  margin: 4rem 0 2rem;
  text-align: right;
  text-transform: none;
`
