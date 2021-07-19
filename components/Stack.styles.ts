import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

interface StackItemProps {
  $spacing: boolean
}

export const StackItem = styled.div<StackItemProps>`
  ${({ $spacing }) => {
    if (!$spacing) {
      return
    }

    return css`
      margin-top: 0.5rem;
      padding-top: 0.5rem;
    `
  }};
`
