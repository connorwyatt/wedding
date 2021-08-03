export interface Invitee {
  id: string
  name: string | null
  status: 'unknown' | 'attending' | 'notAttending'
  foodOption: 'standard' | 'vegetarian' | null
  dietaryNotes: string | null
}
