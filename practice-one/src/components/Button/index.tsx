const Button = ({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`${className} rounded-lg hover:shadow-lg p-3 transition font-500`}
      {...rest}
    ></button>
  )
}

export default Button
