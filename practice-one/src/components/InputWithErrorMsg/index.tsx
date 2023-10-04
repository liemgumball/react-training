import React, { forwardRef, LegacyRef } from 'react';

type InputWithLabelProps = {
  labeled?: boolean;
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
      labeled,
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
        {labeled && <label htmlFor={id}>{name}</label>}
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
