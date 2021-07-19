import styled from 'styled-components'
import { textStyle } from 'styles/helpers'

export const Emphasis = styled.span``

export const SectionText = styled.p`
  ${({ theme }) => textStyle(theme.typography.paragraph)};
  text-align: right;

  & ${Emphasis} {
    ${({ theme }) => textStyle(theme.typography.paragraphEmphasis)};
  }
`

export const SectionHeading = styled(SectionText)`
  ${({ theme }) => textStyle(theme.typography.sectionHeading)};
`
