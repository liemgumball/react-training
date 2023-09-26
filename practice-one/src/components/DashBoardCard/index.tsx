import { Link, LinkProps } from 'react-router-dom'

type DashBoardCardProps = {
  cardName: string
  mainInfo: string
} & LinkProps

const DashBoardCard = (props: DashBoardCardProps) => {
  const { cardName, mainInfo, className, children, ...rest } = props
  return (
    <Link
      className={`${className} dashboard-card p-10 cursor-pointer rounded-lg hover:shadow-2xl hover:shadow-zinc-300 w-auto border transition`}
      {...rest}
    >
      {children}
      <p className="text mt-2">{cardName}</p>
      <p className="text-4xl mt-3 text-black font-700 text-end uppercase truncate">
        {mainInfo}
      </p>
    </Link>
  )
}

export default DashBoardCard
