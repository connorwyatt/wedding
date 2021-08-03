export interface RsvpFormValues {
  invitees: {
    [key: string]: {
      attending: 'true' | 'false'
      foodOption: 'standard' | 'vegetarian'
      dietaryNotes: string
    }
  }
}
