import { Children, FC } from 'react'
import { Container, StackItem } from './Stack.styles'

export interface StackProps {
  size: 'small' | 'standard' | 'large'
}

// This needs fixing, it uses the index as the key
export const Stack: FC<StackProps> = ({ children, size }) => {
  if (Children.count(children) <= 1) {
    return <div>{children}</div>
  }

  return (
    <Container>
      {Children.toArray(children).map((child, index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <StackItem key={index} $spacing={index > 0 ? size : null}>
            {child}
          </StackItem>
        )
      })}
    </Container>
  )
}
