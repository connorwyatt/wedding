import styled, { css } from 'styled-components'
import { boxShadow, textStyle } from 'styles/helpers'
import { white } from 'styles/theme'

export const Button = styled.button`
  ${({ theme }) => textStyle(theme.typography.paragraph)};
  background-color: ${({ theme }) => theme.colors.text.primary};
  border: 0px solid transparent;
  border-radius: 0.25rem;
  box-shadow: ${({ theme }) => boxShadow(theme.shadows.buttons)};
  color: ${white};
  cursor: pointer;
  margin: 0;
  padding: 0.25rem 2rem;
`
