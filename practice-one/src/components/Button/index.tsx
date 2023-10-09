type ButtonProps = {
  primary?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  className,
  primary,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`${className} btn ${
        disabled ? 'bg-custom-dark-gray' : primary ? 'bg-custom-yellow' : ''
      }`}
      disabled={disabled}
      {...rest}
    ></button>
  );
};

export default Button;
