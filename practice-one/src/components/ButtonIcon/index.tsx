type ButtonIconProps = {
  iconSrc: string
  alt: string
  children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonIcon = (props: ButtonIconProps) => {
  const { iconSrc, alt, className, children, ...rest } = props
  return (
    <button
      type="button"
      className={`${className} rounded-lg hover:shadow-lg hover:bg-white p-3`}
      {...rest}
    >
      {children}
      <img src={iconSrc} alt={alt} />
    </button>
  )
}

export default ButtonIcon
