type CardProps = {
  cardName: string
  mainInfo: string
  className: string
  to: string
  children?: React.ReactNode
}

const Card = (props: CardProps) => {
  const { cardName, mainInfo, className, to, children } = props
  return (
    <a
      href={to}
      className={`${className} card p-12 cursor-pointer rounded-lg hover:shadow-2xl hover:shadow-zinc-300 w-auto border`}
    >
      {children}
      <p className="text mt-2">{cardName}</p>
      <p className="text-4xl mt-2 text-black font-700 text-end  uppercase">
        {mainInfo}
      </p>
    </a>
  )
}

export default Card
