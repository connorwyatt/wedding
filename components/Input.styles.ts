import styled, { css } from 'styled-components'
import { textStyle } from 'styles/helpers'

export interface StyledInputProps {
  $isInvalid?: boolean
  spellcheck?: 'false'
}

export const StyledInput = styled.input<StyledInputProps>`
  ${({ theme }) => textStyle(theme.typography.paragraph)};
  border: 1px solid ${({ theme }) => theme.colors.separators};
  border-radius: 0.25rem;
  display: block;
  margin: 0.25rem 0 0;
  padding: 0.25rem;
  text-align: right;
  transition: opacity 0.2s ease-in-out;
  width: 100%;

  &:enabled {
    ${({ theme, $isInvalid }) =>
      ($isInvalid ?? false) &&
      css`
        border-color: ${theme.colors.error};
      `};
  }

  &[disabled] {
    color: transparent;
    opacity: 0.3;
  }
`

export interface LabelProps {
  $disabled: boolean
}

export const Label = styled.label<LabelProps>`
  ${({ theme }) => textStyle(theme.typography.paragraphEmphasis)};
  display: block;
  text-align: right;
  transition: opacity 0.2s ease-in-out;

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.3;
    `}
`

export const ErrorMessage = styled.div`
  ${({ theme }) => textStyle(theme.typography.paragraphEmphasis)};
  color: ${({ theme }) => theme.colors.error};
  margin-top: 0.25rem;
  text-align: right;
`
