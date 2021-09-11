import { format } from 'date-fns'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { FC, useState } from 'react'
import { Button } from 'components/Button.styles'
import { Map } from 'components/Map'
import { PaddedContainer } from 'components/PaddedContainer.styles'
import { SakuraContainer } from 'components/SakuraContainer.styles'
import { Emphasis, SectionHeading, SectionText, SectionTextSmall } from 'components/SectionText.styles'
import { Stack } from 'components/Stack'
import { ThanksForRsvpBanner } from 'components/ThanksForRsvpBanner'
import { Title } from 'components/Title'
import { responseRequiredByDate } from 'config/responseRequiredByDate'
import { Invitation } from 'models/Invitation'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const code = context.params?.code

  if (code == null || typeof code !== 'string') {
    return {
      notFound: true,
    }
  }

  const response = await fetch(`${process.env.WEDDING_INVITATIONS_SERVICE_URL}/invitations?code=${code}`)

  if (!response.ok) {
    return {
      notFound: true,
    }
  }

  const invitations = (await response.json()) as Invitation[]

  if (invitations.length !== 1) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      invitation: invitations[0],
      responseRequiredByDate: format(responseRequiredByDate, 'dd.MM.yyyy'),
    },
  }
}

export interface InvitationProps {
  invitation: Invitation
  responseRequiredByDate: string
}

const InvitationPage: FC<InvitationProps> = ({ invitation, responseRequiredByDate }) => {
  const [showMap, setShowMap] = useState(false)

  const responseReceived = invitation.status === 'responseReceived'

  return (
    <>
      <Head>
        <title>Invitation for {invitation.addressedTo} | Connor &amp; Laura's Wedding</title>
      </Head>

      {responseReceived && <ThanksForRsvpBanner />}

      <SakuraContainer>
        <PaddedContainer>
          <Stack size='standard'>
            <Title />

            <SectionText data-test-id='invitationDescription'>
              Would like to invite {invitation.addressedTo} to join them to celebrate their marriage
            </SectionText>

            <SectionHeading data-test-id='date'>19.03.2022</SectionHeading>

            <SectionText data-test-id='dayTimings'>
              {invitation.type === 'fullDay' ? (
                <>
                  <Emphasis>4pm</Emphasis> Ceremony, <Emphasis>7pm</Emphasis> Reception
                </>
              ) : (
                <>
                  <Emphasis>7pm</Emphasis> Reception
                </>
              )}
            </SectionText>

            <SectionText data-test-id='location'>
              at <Emphasis>Wootton Park</Emphasis>
              <br />
              Wootton Wawen, Henley-in-Arden, B95 6HJ
            </SectionText>

            <SectionText>
              <Button type='button' onClick={() => setShowMap(!showMap)}>
                {showMap ? 'Hide map' : 'Show map'}
              </Button>
            </SectionText>

            <SectionTextSmall data-test-id='guestInformation'>
              You can also view the{' '}
              <a href='https://www.woottonparkweddings.co.uk/guest-info' data-test-id='guestInformationLink'>
                guest information from our venue
              </a>
              .
            </SectionTextSmall>
          </Stack>
        </PaddedContainer>

        {showMap && <Map />}

        <PaddedContainer>
          <Stack size='standard'>
            {!responseReceived && (
              <SectionText data-test-id='rsvpDate'>
                <Stack size='small'>
                  <Link href={`/invitation/${invitation.code}/rsvp`}>
                    <Button as='a' data-test-id='rsvpLink'>
                      RSVP
                    </Button>
                  </Link>
                  <span>
                    by <Emphasis>{responseRequiredByDate}</Emphasis>
                  </span>
                </Stack>
              </SectionText>
            )}

            <SectionTextSmall data-test-id='contactInformation'>
              Any queries, feel free to contact us at{' '}
              <a href='mailto:connorwyatt1@gmail.com' data-test-id='contactInformationEmail'>
                connorwyatt1@gmail.com
              </a>
              .
            </SectionTextSmall>
          </Stack>
        </PaddedContainer>
      </SakuraContainer>
    </>
  )
}

export default InvitationPage
