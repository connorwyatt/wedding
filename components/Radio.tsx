import { FC, Fragment } from 'react'
import { ChangeHandler, UseFormRegisterReturn } from 'react-hook-form'

export interface RadioProps {
  name: string
  options: Array<{ label: string; value: string }>
  disabled?: boolean
  formProps: UseFormRegisterReturn
}

export const Radio: FC<RadioProps> = ({ name, options, disabled = false, formProps }) => {
  return (
    <>
      {options.map((option) => (
        <Fragment key={option.value}>
          <input
            {...formProps}
            type='radio'
            id={`${name}:${option.value}`}
            name={name}
            value={option.value}
            disabled={disabled}
          />
          <label htmlFor={`${name}:${option.value}`}>{option.label}</label>
        </Fragment>
      ))}
    </>
  )
}
