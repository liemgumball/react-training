type ButtonProps = {
  variant?: 'primary' | '';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { className, variant, disabled, children, ...rest } = props;

  return (
    <button
      className={`btn ${className ? className : ''} ${
        variant ? 'btn-' + variant : ''
      }`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
