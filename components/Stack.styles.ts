import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

interface StackItemProps {
  $spacing: 'small' | 'standard' | 'large' | null
}

const sizes = {
  small: '0.5rem',
  standard: '1rem',
  large: '3rem',
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
