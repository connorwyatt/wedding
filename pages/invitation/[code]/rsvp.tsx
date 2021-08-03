import { format } from 'date-fns'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { FC } from 'react'
import { RsvpForm } from 'components/RsvpForm'
import { Stack } from 'components/Stack'
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

  const response = await fetch(
    `${process.env.WEDDING_INVITATIONS_SERVICE_URL}/invitations?code=${encodeURIComponent(code)}`,
  )

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

export interface RsvpProps {
  invitation: Invitation
  responseRequiredByDate: string
}

const Rsvp: FC<RsvpProps> = ({ invitation }) => (
  <>
    <Head>
      <title>RSVP for {invitation.addressedTo} | Connor &amp; Laura's Wedding</title>
    </Head>

    <Stack size='large'>
      <Title />

      <RsvpForm invitation={invitation} />
    </Stack>
  </>
)

export default Rsvp
