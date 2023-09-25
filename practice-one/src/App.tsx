import './App.css'
import LoginPage from './pages/LoginPage'
import useLocalStorage from '@hooks/useLocalStorage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashBoardPage from './pages/DashBoardPage'
import { useState } from 'react'
import StudentPage from './pages/StudentPage'
import { PATH_NAME } from '@constants/services'
import PaymentPage from './pages/PaymentPage'
import MainLayout from './layouts/MainLayout'
import PrivateRoute from '@utils/PrivateRoute'
import EmptyPage from './pages/EmptyPage'

export type AuthType = {
  accessToken: string
  name: string
}

function App() {
  const [auth, setAuth] = useLocalStorage('user', {
    accessToken: '',
    name: '',
  })

  const [searchText, setSearchText] = useState('')

  return (
    <Router>
      <Routes>
        {/* Private routes */}
        <Route element={<PrivateRoute auth={auth} />}>
          <Route
            element={
              <MainLayout
                auth={auth}
                setAuth={setAuth}
                searchText={searchText}
                setSearchText={setSearchText}
              />
            }
          >
            <Route path={PATH_NAME.HOME} element={<DashBoardPage />} />
            <Route
              path={PATH_NAME.STUDENTS}
              element={<StudentPage searchText={searchText} />}
            />
            <Route
              path={PATH_NAME.PAYMENTS}
              element={<PaymentPage searchText={searchText} />}
            />
            <Route path="/*" element={<EmptyPage />} />
          </Route>
        </Route>
        {/* Public routes */}
        <Route
          path={PATH_NAME.LOGIN}
          element={<LoginPage setAuth={setAuth} />}
        />
      </Routes>
    </Router>
  )
}

export default App
