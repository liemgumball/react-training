import Sidebar from '@components/Sidebar'
import './App.css'
import LoginPage from './pages/LoginPage'
import useLocalStorage from '@hooks/useLocalStorage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '@components/Header'
import DashBoardPage from './pages/DashBoardPage'
import PublicRoutes from './utils/PublicRoutes'
import { useState } from 'react'
import StudentPage from './pages/StudentPage'
import { PATH_NAME } from '@constants/services'

export type authType = {
  accessToken: string
  name: string
}

function App() {
  const [auth, setAuth] = useLocalStorage('user', {
    accessToken: '',
    name: '',
  })

  const [searchText, setSearchText] = useState('')

  return auth.accessToken ? (
    <Router>
      <div className="bg-white flex capitalize">
        <Sidebar setAuth={setAuth} username={auth.name} />
        <main className="w-full max-h-screen">
          <Header searchText={searchText} setSearchText={setSearchText} />
          <Routes>
            <Route path={PATH_NAME.HOME} element={<DashBoardPage />} />
            <Route
              path={PATH_NAME.STUDENTS}
              element={<StudentPage searchText={searchText} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  ) : (
    <Router>
      <PublicRoutes auth={auth} navTo={PATH_NAME.LOGIN}>
        <Route
          path={PATH_NAME.LOGIN}
          element={<LoginPage setAuth={setAuth}></LoginPage>}
        />
      </PublicRoutes>
    </Router>
  )
}

export default App
