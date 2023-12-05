import React, { forwardRef, LegacyRef } from 'react';

type InputWithLabelProps = {
  showLabel?: boolean;
  name: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
  value?: string;
  placeholder?: string;
  errorMsg?: string | null;
  inValid?: boolean;
  onchange?: React.ChangeEventHandler<HTMLInputElement>;
};

const InputWithErrorMsg = forwardRef(
  (props: InputWithLabelProps, ref?: LegacyRef<HTMLInputElement>) => {
    const {
      showLabel,
      name,
      id,
      type,
      placeholder,
      errorMsg,
      value,
      onchange,
      inValid = false,
    } = props;

    return (
      <div className="input-field flex flex-col mb-5">
        {showLabel && (
          <label htmlFor={id} className="text-custom-dark-gray mb-1">
            {name}:
          </label>
        )}
        <input
          className={`border rounded-md py-3 px-5 mt-1 w-full ${
            inValid ? 'border-red-500' : 'border-gray-500'
          }`}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          ref={ref}
          value={value}
          onChange={onchange}
        />
        <p
          className={`error-msg text-sm text-red-500 normal-case ${
            inValid ? '' : 'invisible'
          }`}
        >
          {errorMsg ? errorMsg : 'invalid input'}
        </p>
      </div>
    );
  }
);

export default InputWithErrorMsg;
