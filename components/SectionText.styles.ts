import styled from 'styled-components'
import { textStyle } from 'styles/helpers'

export const Emphasis = styled.span``

export const SectionText = styled.p`
  ${({ theme }) => textStyle(theme.typography.paragraph)};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: right;

  & ${Emphasis} {
    ${({ theme }) => textStyle(theme.typography.paragraphEmphasis)};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`

export const SectionHeading = styled(SectionText)`
  ${({ theme }) => textStyle(theme.typography.sectionHeading)};
  color: ${({ theme }) => theme.colors.text.primary};
`

export const Subtext = styled(SectionText)`
  ${({ theme }) => textStyle(theme.typography.subtext)};
`
