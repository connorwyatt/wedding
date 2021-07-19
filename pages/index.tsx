import { FC } from 'react'
import { FullWidthContainer } from 'components/FullWidthContainer.styles'
import { Map } from 'components/Map'
import { Section } from 'components/Section'
import { Emphasis, SectionText } from 'components/SectionText.styles'
import { Stack } from 'components/Stack'
import { Title } from 'components/Title'

const Home: FC = () => (
  <Stack>
    <Title />
    <Section heading='Date and Time'>
      <SectionText>
        <Emphasis>4pm</Emphasis> Ceremony, <Emphasis>7pm</Emphasis> Reception
      </SectionText>
      <SectionText>
        <Emphasis>19.03.2022</Emphasis>
      </SectionText>
    </Section>
    <Section heading='Location'>
      <SectionText>
        <Emphasis>Wootton Park</Emphasis>
        <br />
        Wootton Wawen, Henley-in-Arden, B95 6HJ
      </SectionText>
      <FullWidthContainer>
        <Map />
      </FullWidthContainer>
    </Section>
  </Stack>
)

export default Home
