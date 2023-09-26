import './App.css';

// base
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useLocalStorage from '@hooks/useLocalStorage';
import PrivateRoute from '@utils/PrivateRoute';

// layout & pages
import MainLayout from './layouts/MainLayout';
import LoginPage from './pages/LoginPage';
import DashBoardPage from './pages/DashBoardPage';
import StudentPage from './pages/StudentPage';
import PaymentPage from './pages/PaymentPage';
import EmptyPage from './pages/EmptyPage';

// constants
import { PATH_NAME } from '@constants/services';

export type AuthType = {
  accessToken: string;
  name: string;
};

function App() {
  const [auth, setAuth] = useLocalStorage('user', {
    accessToken: '',
    name: '',
  });

  const [searchText, setSearchText] = useState<string>('');

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
  );
}

export default App;
