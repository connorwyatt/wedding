export interface InviteeResponse {
  id: string
  attending: boolean
  foodOption: 'standard' | 'vegetarian' | null
  dietaryNotes: string | null
}
