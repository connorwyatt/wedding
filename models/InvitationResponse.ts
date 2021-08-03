import { InviteeResponse } from './InviteeResponse'

export interface InvitationResponse {
  contactInformation: string | null
  invitees: InviteeResponse[]
}
