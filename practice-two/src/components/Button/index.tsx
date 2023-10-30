type ButtonProps = {
  primary?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { className, primary, disabled, children, ...rest } = props;

  return (
    <button
      className={`${className} btn ${
        disabled ? 'bg-custom-dark-gray' : primary ? 'bg-custom-yellow' : ''
      }`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
