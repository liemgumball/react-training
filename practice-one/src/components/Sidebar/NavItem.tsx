import { Link, useLocation } from 'react-router-dom'

type NavItemProps = {
  pathname: string
  children?: React.ReactNode
}

const NavItem = (props: NavItemProps) => {
  const { pathname, children } = props

  const location = useLocation()
  return (
    <li>
      <Link
        className={`${
          location.pathname === pathname
            ? 'bg-custom-yellow'
            : 'hover:bg-custom-gray'
        } py-3 px-16 min-w-max block rounded-lg my-3 flex items-center justify-baseline gap-2`}
        to={pathname}
      >
        {children}
      </Link>
    </li>
  )
}

export default NavItem
