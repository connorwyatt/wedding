import { FC } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import { ErrorMessage, Input, Label, Option, Options, Text } from './Radio.styles'

export interface RadioProps {
  name: string
  label: string
  options: Array<{ label: string; value: string }>
  disabled?: boolean
  formProps: UseFormRegisterReturn
  error?: FieldError | undefined
  qaType: string
}

export const Radio: FC<RadioProps> = ({ name, label, options, disabled = false, formProps, error, qaType }) => {
  return (
    <>
      <Text $disabled={disabled}>{label}</Text>
      <Options>
        {options.map((option) => (
          <Option key={option.value}>
            <Input
              {...formProps}
              type='radio'
              id={`${name}:${option.value}`}
              name={name}
              value={option.value}
              disabled={disabled}
              data-qa-type={qaType}
            />
            <Label htmlFor={`${name}:${option.value}`}>{option.label}</Label>
          </Option>
        ))}
      </Options>
      {error != null && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
  )
}
