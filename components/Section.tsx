import React, { FC } from 'react'
import { SectionHeading } from './SectionText.styles'
import { Stack } from './Stack'

interface Props {
  heading: string
  testId?: string
}

export const Section: FC<Props> = ({ heading, children, testId }) => (
  <div data-test-id={testId}>
    <Stack size='standard'>
      <SectionHeading as='h2'>{heading}</SectionHeading>
      {children}
    </Stack>
  </div>
)
