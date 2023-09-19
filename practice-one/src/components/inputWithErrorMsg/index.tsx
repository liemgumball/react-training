import { forwardRef, LegacyRef } from 'react'

type InputWithLabelProps = {
  showLabel?: boolean
  name: string
  id: string
  type: React.HTMLInputTypeAttribute
  value?: string
  placeholder?: string
  errorMsg?: string | null
}

const InputWithErrorMsg = forwardRef(
  (props: InputWithLabelProps, ref: LegacyRef<HTMLInputElement>) => {
    const { showLabel, name, id, type, placeholder, errorMsg } = props

    return (
      <div className="input-field flex flex-col mb-5">
        {showLabel && <label htmlFor={id}>{name}</label>}
        <input
          className={`border rounded-md p-3 mt-1 w-full ${
            errorMsg ? 'border-red-500' : 'border-gray-500'
          }`}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          ref={ref}
        />
        <p
          className={`error-msg text-sm text-red-500 normal-case ${
            errorMsg ? '' : 'invisible'
          }`}
        >
          {errorMsg ? errorMsg : 'invalid input'}
        </p>
      </div>
    )
  }
)

export default InputWithErrorMsg
