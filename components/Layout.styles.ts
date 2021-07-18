import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 40rem;
  padding: 1rem;
`

export const Paper = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`
