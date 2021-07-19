import { Children, FC } from 'react'
import { Container, StackItem } from './Stack.styles'

// This needs fixing, it uses the index as the key
export const Stack: FC = ({ children }) => {
  if (Children.count(children) <= 1) {
    return <div>{children}</div>
  }

  return (
    <Container>
      {Children.toArray(children).map((child, index) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <StackItem key={index} $spacing={index > 0}>
            {child}
          </StackItem>
        )
      })}
    </Container>
  )
}
