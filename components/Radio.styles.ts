import styled, { css } from 'styled-components'
import { textStyle } from 'styles/helpers'
import { white } from 'styles/theme'

export interface TextProps {
  $disabled: boolean
}

export const Text = styled.div<TextProps>`
  ${({ theme }) => textStyle(theme.typography.paragraphEmphasis)};
  transition: opacity 0.2s ease-in-out;
  text-align: right;

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.3;
    `}
`

export const Options = styled.div`
  margin-top: 0.25rem;
  text-align: right;
`

export const Option = styled.span`
  display: inline-block;

  & + & {
    margin-left: 1.5rem;
  }
`

export const Input = styled.input`
  height: 0;
  position: absolute;
  visibility: hidden;
  width: 0;
`

export const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  padding-left: 1.5rem;
  position: relative;
  transition: opacity 0.2s ease-in-out;

  &:before {
    background-color: ${white};
    border: 1px solid ${({ theme }) => theme.colors.separators};
    border-radius: 100%;
    content: '';
    height: calc(1rem - 2px);
    left: 0;
    position: absolute;
    top: 0;
    width: calc(1rem - 2px);
  }

  &:after {
    background-color: ${({ theme }) => theme.colors.links.normal};
    border-radius: 100%;
    content: '';
    height: calc(1rem - 6px);
    left: 3px;
    position: absolute;
    top: 3px;
    transform: scale(0);
    transition: transform 0.2s ease-in-out;
    width: calc(1rem - 6px);
  }

  ${Input}[disabled] + & {
    cursor: default;
    opacity: 0.3;
  }

  ${Input}:checked:enabled + & {
    &:after {
      transform: scale(1);
    }
  }
`

export const ErrorMessage = styled.div`
  ${({ theme }) => textStyle(theme.typography.paragraphEmphasis)};
  color: ${({ theme }) => theme.colors.error};
  margin-top: 0.25rem;
  text-align: right;
`
