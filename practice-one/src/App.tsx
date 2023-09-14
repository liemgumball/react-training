import Sidebar from '@components/Sidebar'
import './App.css'
import LoginPage from './pages/LoginPage'
import useLocalStorage from '@hooks/useLocalStorage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '@components/Header'
import DashBoardPage from './pages/DashBoardPage'
import PublicRoutes from './utils/PublicRoutes'

export type authType = {
  accessToken: string
  name: string
}

function App() {
  const [auth, setAuth] = useLocalStorage('user', {
    accessToken: '',
    name: '',
  })

  return auth.accessToken ? (
    <Router>
      <div className="bg-custom-gray flex h-full overflow-y-scroll capitalize">
        <Sidebar setAuth={setAuth} />
        <Header />
        <Routes>
          <Route path="/" Component={DashBoardPage} />
        </Routes>
      </div>
    </Router>
  ) : (
    <Router>
      <PublicRoutes auth={auth} navTo="/login">
        <Route
          path="/login"
          element={<LoginPage setAuth={setAuth}></LoginPage>}
        />
      </PublicRoutes>
    </Router>
  )
}

export default App
