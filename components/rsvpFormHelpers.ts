import { RsvpFormValues } from './RsvpFormValues'
import { InvitationResponse } from 'models/InvitationResponse'
import { InviteeResponse } from 'models/InviteeResponse'

export const mapRsvpFormValues = (formValues: RsvpFormValues): InvitationResponse => ({
  contactInformation: formValues.contactInformation?.length > 0 ? formValues.contactInformation : null,
  invitees: Object.keys(formValues.invitees).map((id): InviteeResponse => {
    const invitee = formValues.invitees[id]

    return {
      id,
      attending: invitee.attending === 'true',
      foodOption: invitee.foodOption,
      dietaryNotes: invitee.dietaryNotes?.length > 0 ? invitee.dietaryNotes : null,
    }
  }),
})
