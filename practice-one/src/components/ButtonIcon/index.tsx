type ButtonIconProps = {
  iconSrc: string
  alt: string
  children?: React.ReactNode
}

const ButtonIcon = (props: ButtonIconProps) => {
  const { iconSrc, alt, children } = props
  return (
    <button
      type="button"
      className="rounded-lg hover:shadow-lg hover:bg-white p-3"
    >
      {children}
      <img src={iconSrc} alt={alt} />
    </button>
  )
}

export default ButtonIcon
