export interface InviteeFormValues {
  attending: 'true' | 'false'
  foodOption: 'standard' | 'vegetarian'
  dietaryNotes: string
}

export interface RsvpFormValues {
  contactInformation: string
  invitees: {
    [key: string]: InviteeFormValues
  }
}
