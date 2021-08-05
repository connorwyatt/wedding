import { FC } from 'react'
import { Control, DeepMap, FieldError, useWatch } from 'react-hook-form'
import { Input } from './Input'
import { Radio } from './Radio'
import { InviteeFormValues, RsvpFormValues } from './RsvpFormValues'
import { Section } from './Section'
import { Invitee } from 'models/Invitee'

export interface InviteeRsvpFormSectionProps {
  control: Control<RsvpFormValues>
  invitee: Invitee
  errors?: DeepMap<InviteeFormValues, FieldError | undefined> | undefined
}

export const InviteeRsvpFormSection: FC<InviteeRsvpFormSectionProps> = ({ control, errors, invitee }) => {
  const { register } = control
  const attending =
    useWatch({
      control,
      name: `invitees.${invitee.id}.attending`,
      defaultValue: 'false',
    }) === 'true'

  return (
    <Section key={invitee.id} heading={invitee.name ?? 'Plus One'}>
      <Radio
        formProps={register(`invitees.${invitee.id}.attending`, {
          required: 'You must let us know if you are attending',
        })}
        name={`invitees.${invitee.id}.attending`}
        label='Are you attending?'
        options={[
          { label: 'Yes', value: 'true' },
          { label: 'No', value: 'false' },
        ]}
        error={errors?.attending}
      />

      <Radio
        formProps={register(`invitees.${invitee.id}.foodOption`, {
          validate: {
            required: (value: string) => {
              if (!attending) {
                return
              }

              if (value == null || value.length === 0) {
                return 'We need to know what kind of food you would like'
              }
            },
          },
        })}
        name={`invitees.${invitee.id}.foodOption`}
        label={"We're having BBQ food in the evening, what kind of meal do you want?"}
        options={[
          { label: 'Standard', value: 'standard' },
          { label: 'Vegetarian', value: 'vegetarian' },
        ]}
        disabled={!attending}
        error={errors?.foodOption}
      />

      <Input
        formProps={register(`invitees.${invitee.id}.dietaryNotes`, {
          maxLength: { value: 250, message: 'Please enter less than 250 characters.' },
        })}
        name={`invitees.${invitee.id}.dietaryNotes`}
        label='Any extra dietary information? (optional)'
        type='text'
        disabled={!attending}
        error={errors?.dietaryNotes}
      />
    </Section>
  )
}
