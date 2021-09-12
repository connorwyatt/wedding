import { FC } from 'react'
import { Control, DeepMap, FieldError, useWatch } from 'react-hook-form'
import { Input } from './Input'
import { Radio } from './Radio'
import { InviteeFormValues, RsvpFormValues } from './RsvpFormValues'
import { Section } from './Section'
import { SectionText } from './SectionText.styles'
import { Stack } from './Stack'
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
    <Section key={invitee.id} heading={invitee.name ?? 'Plus One'} testId='inviteeRsvpFormSection'>
      <Radio
        formProps={register(`invitees.${invitee.id}.attending`, {
          required: 'Let us know if you are attending',
        })}
        name={`invitees.${invitee.id}.attending`}
        label='Are you able to make it?'
        options={[
          { label: 'Yes', value: 'true' },
          { label: 'No', value: 'false' },
        ]}
        error={errors?.attending}
        testId='attendingRadioOption'
      />

      {invitee.requiresFood ? (
        <Stack size='standard'>
          <Radio
            formProps={register(`invitees.${invitee.id}.foodOption`, {
              validate: {
                required: (value: string) => {
                  if (!attending) {
                    return
                  }

                  if (value == null || value.length === 0) {
                    return 'We need to know what kind of food you would like for our caterer'
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
            testId='foodOptionRadioOption'
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
            testId='dietaryInformationInput'
          />
        </Stack>
      ) : (
        <SectionText data-test-id='requiresNoFoodContent'>
          We have {invitee.name} down as not requiring any food, let us know if this isn't the case and we'll correct
          it.
        </SectionText>
      )}
    </Section>
  )
}
