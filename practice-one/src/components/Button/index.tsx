type ButtonProps = {
  primary?: boolean;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, primary, isLoading, ...rest }: ButtonProps) => {
  return (
    <button
      className={`${className} btn ${
        isLoading ? 'bg-custom-dark-gray' : primary ? 'bg-custom-yellow' : ''
      }`}
      disabled={isLoading}
      {...rest}
    ></button>
  );
};

export default Button;
