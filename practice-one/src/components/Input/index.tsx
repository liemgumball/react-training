import { forwardRef } from 'react';

const Input = forwardRef(
  (
    props: React.InputHTMLAttributes<HTMLInputElement>,
    ref?: React.LegacyRef<HTMLInputElement>
  ) => {
    const { className, ...rest } = props;
    return (
      <input
        className={`${className} py-3 px-5 rounded-lg border border-custom-gray text-lg w-full`}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default Input;
