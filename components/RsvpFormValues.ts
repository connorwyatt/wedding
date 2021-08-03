export interface RsvpFormValues {
  contactInformation: string
  invitees: {
    [key: string]: {
      attending: 'true' | 'false'
      foodOption: 'standard' | 'vegetarian'
      dietaryNotes: string
    }
  }
}
