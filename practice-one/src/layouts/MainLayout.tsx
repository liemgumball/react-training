import Header from '@components/Header'
import Sidebar from '@components/Sidebar'
import { Outlet } from 'react-router-dom'
import { AuthType } from 'src/App'

type MainLayoutProps = {
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
  auth: AuthType
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>
}

const MainLayout = (props: MainLayoutProps) => {
  const { searchText, setSearchText, auth, setAuth } = props

  return (
    <div className="bg-white flex capitalize">
      <Sidebar setAuth={setAuth} username={auth.name} />
      <main className="w-full min-w-max">
        <Header searchText={searchText} setSearchText={setSearchText} />
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
