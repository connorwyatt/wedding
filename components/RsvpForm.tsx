import axios from 'axios'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from './Button.styles'
import { InviteeRsvpFormSection } from './InviteeRsvpFormSection'
import { RsvpFormValues } from './RsvpFormValues'
import { SectionText } from './SectionText.styles'
import { Stack } from './Stack'
import { mapRsvpFormValues } from './rsvpFormHelpers'
import { Invitation } from 'models/Invitation'

export interface RsvpFormProps {
  invitation: Invitation
}

export const RsvpForm: FC<RsvpFormProps> = ({ invitation }) => {
  const { control, handleSubmit } = useForm<RsvpFormValues>()
  const router = useRouter()

  const onSubmit: SubmitHandler<RsvpFormValues> = async (formData) => {
    const invitationResponse = mapRsvpFormValues(formData)

    const response = await axios.post(`/api/invitations/${invitation.id}/actions/respond`, invitationResponse)

    const success = response.status >= 200 && response.status <= 299

    if (success) {
      await router.push(`/invitation/${invitation.code}`)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack size='standard'>
        {invitation.invitees.map((invitee) => (
          <InviteeRsvpFormSection key={invitee.id} control={control} invitee={invitee} />
        ))}

        <SectionText>
          <Button type='submit'>Respond</Button>
        </SectionText>
      </Stack>
    </form>
  )
}
