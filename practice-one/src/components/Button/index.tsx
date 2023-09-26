const Button = ({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className={`${className} btn`} {...rest}></button>
}

export default Button
