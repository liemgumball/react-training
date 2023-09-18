import smallLogo from '@assets/smallLogo.svg'
import avatar from '@assets/avatar.png'
import NavItem from './NavItem'
import house from '@assets/house.svg'
import bookmark from '@assets/bookmark.svg'
import graduationCap from '@assets/graduationCap.svg'
import usdSquare from '@assets/usdSquare.svg'
import fileChartLine from '@assets/fileChartLine.svg'
import sliderSquare from '@assets/sliderSquare.svg'
import signOut from '@assets/signOut.svg'
import { authType } from 'src/App'
import { Dispatch, SetStateAction } from 'react'

type SidebarProps = {
  setAuth: Dispatch<SetStateAction<authType>>
  username: string
}

const Sidebar = ({ setAuth, username }: SidebarProps) => {
  const logout = () => {
    setAuth({ accessToken: '', name: '' })
  }

  return (
    <aside className="sidebar bg-custom-beige p-5 flex flex-col items-center justify-around gap-y-10 min-h-screen h-full">
      <div className="flex items-center justify-center">
        <img src={smallLogo} alt="Logo" />
        <p className="text-xl uppercase font-semibold">CRUD operations</p>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <div className="w-32 h-32">
          <div className="img-container">
            <img
              src={avatar}
              alt="avatar"
              className="rounded-full w-full h-full"
            />
          </div>
        </div>
        <h2 className="font-700 text-xl">{username}</h2>
        <p className="text-custom-yellow">Admin</p>
      </div>
      <nav className="p-5">
        <ul>
          <NavItem pathname="/">
            <img src={house} alt="house" />
            home
          </NavItem>
          <NavItem pathname="/course">
            <img src={bookmark} alt="book mark" />
            course
          </NavItem>
          <NavItem pathname="/students">
            <img src={graduationCap} alt="graduation cap" />
            students
          </NavItem>
          <NavItem pathname="/payment">
            <img src={usdSquare} alt="usd square" />
            payment
          </NavItem>
          <NavItem pathname="/report">
            <img src={fileChartLine} alt="file chart line" />
            report
          </NavItem>
          <NavItem pathname="/settings">
            <img src={sliderSquare} alt="slider square" />
            settings
          </NavItem>
        </ul>
      </nav>

      <button
        className="capitalize px-16 py-3 rounded-lg hover:bg-custom-gray"
        onClick={logout}
      >
        logout
        <img src={signOut} alt="sign out" className="inline-block mx-2" />
      </button>
    </aside>
  )
}

export default Sidebar
