import { InputHTMLAttributes, forwardRef } from 'react';

type InputProps = {
  inValid?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { inValid, ...rest } = props;

  return (
    <input
      aria-invalid={inValid}
      className={`border p-4 my-1 rounded-lg ${
        inValid ? 'border-red-500' : ''
      }`}
      ref={ref}
      {...rest}
    />
  );
});

export default Input;
