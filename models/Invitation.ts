import { Invitee } from './Invitee'

export interface Invitation {
  id: string
  code: string
  type: 'fullDay' | 'receptionOnly'
  status: 'created' | 'sent' | 'responseReceived'
  addressedTo: string
  emailAddress: string | null
  emailSent: boolean
  createdAt: string
  sentAt: string | null
  respondedAt: string | null
  invitees: Invitee[]
}
