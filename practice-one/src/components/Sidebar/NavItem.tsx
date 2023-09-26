import { Link, LinkProps, useLocation } from 'react-router-dom'

const NavItem = (props: LinkProps) => {
  const { to, ...rest } = props

  const location = useLocation()
  return (
    <li>
      <Link
        className={`${
          location.pathname === to ? 'bg-custom-yellow' : 'hover:bg-custom-gray'
        } py-3 px-16 min-w-max block rounded-lg my-3 flex items-center justify-baseline gap-2 transition`}
        to={to}
        {...rest}
      ></Link>
    </li>
  )
}

export default NavItem
