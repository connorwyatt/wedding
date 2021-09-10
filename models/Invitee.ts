export interface Invitee {
  id: string
  name: string | null
  status: 'unknown' | 'attending' | 'notAttending'
  requiresFood: boolean
  foodOption: 'standard' | 'vegetarian' | null
  dietaryNotes: string | null
}
