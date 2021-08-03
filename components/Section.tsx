import React, { FC } from 'react'
import { SectionHeading } from './SectionText.styles'
import { Stack } from './Stack'

interface Props {
  heading: string
}

export const Section: FC<Props> = ({ heading, children }) => (
  <Stack size='standard'>
    <SectionHeading as='h2'>{heading}</SectionHeading>
    {children}
  </Stack>
)
