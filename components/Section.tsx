import React, { FC } from 'react'
import { SectionHeading } from './SectionText.styles'
import { Stack } from './Stack'

interface Props {
  heading: string
  qaType?: string
}

export const Section: FC<Props> = ({ heading, children, qaType }) => (
  <div data-qa-type={qaType}>
    <Stack size='standard'>
      <SectionHeading as='h2'>{heading}</SectionHeading>
      {children}
    </Stack>
  </div>
)
