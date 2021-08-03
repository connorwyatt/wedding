export interface InviteeResponse {
  id: string
  attending: boolean
  foodOption: 'standard' | 'vegetarian'
  dietaryNotes: string | null
}
