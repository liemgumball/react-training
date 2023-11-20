import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  variant?: 'primary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { className, variant, disabled, children, ...rest } = props;

  return (
    <button
      className={twMerge(`btn ${variant ? 'btn-' + variant : ''}`, className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
