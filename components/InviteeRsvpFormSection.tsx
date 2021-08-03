import React, { FC, useMemo } from 'react'
import { Control, useFormContext, useWatch } from 'react-hook-form'
import { Input } from './Input'
import { Radio } from './Radio'
import { RsvpFormValues } from './RsvpFormValues'
import { Section } from './Section'
import { SectionText } from './SectionText.styles'
import { Invitee } from 'models/Invitee'

export interface InviteeRsvpFormSectionProps {
  control: Control<RsvpFormValues>
  invitee: Invitee
}

export const InviteeRsvpFormSection: FC<InviteeRsvpFormSectionProps> = ({ control, invitee }) => {
  const { register } = control
  const attending =
    useWatch({
      control,
      name: `invitees.${invitee.id}.attending`,
      defaultValue: 'false',
    }) === 'true'

  return (
    <Section key={invitee.id} heading={invitee.name ?? 'Plus One'}>
      <SectionText>
        <Radio
          formProps={register(`invitees.${invitee.id}.attending`, {
            required: 'You must let us know if you are attending',
          })}
          name={`invitees.${invitee.id}.attending`}
          options={[
            { label: 'Attending', value: 'true' },
            { label: 'Not attending', value: 'false' },
          ]}
        />
      </SectionText>

      <SectionText>
        <Radio
          formProps={register(`invitees.${invitee.id}.foodOption`, {
            validate: {
              required: (value: string) => {
                if (!attending) {
                  return
                }

                if (value == null || value.length === 0) {
                  return 'We need to know what food option you would like'
                }
              },
            },
          })}
          name={`invitees.${invitee.id}.foodOption`}
          options={[
            { label: 'Standard', value: 'standard' },
            { label: 'Vegetarian', value: 'vegetarian' },
          ]}
          disabled={!attending}
        />
      </SectionText>

      <SectionText>
        <Input
          formProps={register(`invitees.${invitee.id}.dietaryRequirements`, {
            maxLength: { value: 250, message: 'Please enter less than 250 characters.' },
          })}
          name={`invitees.${invitee.id}.dietaryRequirements`}
          label='Dietary requirements (optional)'
          type='text'
          disabled={!attending}
        />
      </SectionText>
    </Section>
  )
}
