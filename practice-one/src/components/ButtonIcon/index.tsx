import Button from '@components/Button'

type ButtonIconProps = {
  iconSrc: string
  alt: string
  children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonIcon = (props: ButtonIconProps) => {
  const { iconSrc, alt, className, children, ...rest } = props
  return (
    <Button type="button" className={`${className} hover:bg-white`} {...rest}>
      {children}
      <img src={iconSrc} alt={alt} />
    </Button>
  )
}

export default ButtonIcon
