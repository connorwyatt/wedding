import styled from 'styled-components'
import { textStyle } from 'styles/helpers'

export const Container = styled.div`
  ${({ theme }) => textStyle(theme.typography.title)};
  line-height: 1;
  padding: 1rem;
  text-align: right;
`
