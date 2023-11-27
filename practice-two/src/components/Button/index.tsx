import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  primary?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { className, primary, disabled, children, ...rest } = props;

  return (
    <button
      className={twMerge(`btn ${primary ? 'btn-' + 'primary' : ''}`, className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
