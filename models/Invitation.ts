import { Invitee } from './Invitee'

export interface Invitation {
  id: string
  code: string
  status: 'created' | 'sent' | 'responseReceived'
  addressedTo: string
  emailAddress: string | null
  emailSent: boolean
  createdAt: string
  sentAt: string | null
  respondedAt: string | null
  invitees: Invitee[]
}
