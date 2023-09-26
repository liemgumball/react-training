import { Link, LinkProps, useLocation } from 'react-router-dom'

const NavItem = (props: LinkProps) => {
  const { to, ...rest } = props

  const location = useLocation()
  return (
    <li>
      <Link
        className={`${
          location.pathname === to ? 'bg-custom-yellow' : 'hover:bg-custom-gray'
        } nav-item`}
        to={to}
        {...rest}
      ></Link>
    </li>
  )
}

export default NavItem
