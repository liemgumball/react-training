import Sidebar from '@components/Sidebar'
import './App.css'
import LoginPage from './pages/LoginPage'
import useLocalStorage from '@hooks/useLocalStorage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashBoard from './pages/DashBoard'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('user', {
    isLoggedIn: false,
    accessToken: '',
    name: '',
  })

  return isLoggedIn.isLoggedIn ? (
    <Router>
      <div className="bg-custom-gray">
        <Sidebar />
        <Routes>
          <Route path="/" Component={DashBoard} />
        </Routes>
      </div>
    </Router>
  ) : (
    <LoginPage setIsLoggedIn={setIsLoggedIn} />
  )
}

export default App
