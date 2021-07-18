import { FC } from 'react'
import { Container, Paper } from './Layout.styles'

export const Layout: FC = ({ children }) => (
  <Container>
    <Paper>{children}</Paper>
  </Container>
)
