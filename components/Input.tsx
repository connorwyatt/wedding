import React, { FC } from 'react'
import { FieldError, UseFormRegisterReturn } from 'react-hook-form'
import { ErrorMessage, Label, StyledInput } from './Input.styles'

export interface InputProps {
  name: string
  label: string
  type: 'text'
  disabled?: boolean
  formProps: UseFormRegisterReturn
  error?: FieldError | undefined
  testId: string
}

export const Input: FC<InputProps> = ({ name, label, type, disabled = false, formProps, error, testId }) => {
  return (
    <>
      <Label htmlFor={name} $disabled={disabled}>
        {label}
      </Label>
      <StyledInput
        {...formProps}
        id={name}
        name={name}
        type={type}
        disabled={disabled}
        spellcheck='false'
        $isInvalid={error != null}
        data-test-id={testId}
      />
      {error != null && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
  )
}
