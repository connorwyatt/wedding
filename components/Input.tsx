import { FC } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface InputProps {
  name: string
  label: string
  type: 'text'
  disabled?: boolean
  formProps: UseFormRegisterReturn
}

export const Input: FC<InputProps> = ({ name, label, type, disabled = false, formProps }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input {...formProps} id={name} name={name} type={type} disabled={disabled} />
    </>
  )
}
