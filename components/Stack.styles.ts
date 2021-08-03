import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

interface StackItemProps {
  $spacing: 'standard' | 'large' | null
}

const sizes = {
  standard: '0.5rem',
  large: '1rem',
}

export const StackItem = styled.div<StackItemProps>`
  ${({ $spacing }) => {
    if ($spacing == null) {
      return
    }

    const spacingSize = sizes[$spacing]

    return css`
      margin-top: ${spacingSize};
      padding-top: ${spacingSize};
    `
  }};
`
