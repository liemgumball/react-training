import Sidebar from '@components/Sidebar'
import './App.css'
import LoginPage from './pages/LoginPage'
import useLocalStorage from '@hooks/useLocalStorage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '@components/Header'
import DashBoardPage from './pages/DashBoardPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('user', {
    isLoggedIn: false,
    accessToken: '',
    name: '',
  })

  return isLoggedIn.isLoggedIn ? (
    <Router>
      <div className="bg-custom-gray flex h-full overflow-y-scroll capitalize">
        <Sidebar />
        <Header />
        <Routes>
          <Route path="/dashboard" Component={DashBoardPage} />
        </Routes>
      </div>
    </Router>
  ) : (
    <LoginPage setIsLoggedIn={setIsLoggedIn} />
  )
}

export default App
