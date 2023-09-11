import { forwardRef, LegacyRef } from 'react'

type InputWithLabelProps = {
  name: string
  id: string
  type: string
  placeholder?: string
  invalid?: boolean
  errorMsg?: string
}

const InputWithErrorMsg = forwardRef(
  (
    {
      name,
      id,
      type,
      placeholder,
      invalid,
      errorMsg = 'Invalid input',
    }: InputWithLabelProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <div className="input-field grid grid-cols-1 mb-5">
        <label htmlFor={id}>{name}</label>
        <input
          className={`border border-gray-300 rounded-md p-3 mt-1 w-full ${
            invalid ? 'invalid' : ''
          }`}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          ref={ref}
        />
        <p
          className={`error-msg text-sm text-red-500 ${invalid ? 'show' : ''}`}
        >
          {errorMsg}
        </p>
      </div>
    )
  }
)

export default InputWithErrorMsg
