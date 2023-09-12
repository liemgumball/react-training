import './App.css'
import LoginPage from './pages/LoginPage'
import useLocalStorage from '@hooks/useLocalStorage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('user', {
    isLoggedIn: false,
    accessToken: '',
    name: '',
  })

  return isLoggedIn.isLoggedIn ? (
    <div className="bg-red-300">React Practice One</div>
  ) : (
    <LoginPage setIsLoggedIn={setIsLoggedIn} />
  )
}

export default App
