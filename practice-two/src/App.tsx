import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './contexts/Authentication';
import PrivateRoutes from '@utils/PrivateRoutes';
import { PATH_NAME } from '@constants/services';
import LoginPage from '@pages/LoginPage';
import HomePage from '@pages/HomePage';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Private Routes */}
          <Route element={<PrivateRoutes />}>
            <Route element={<MainLayout />}>
              <Route path={PATH_NAME.HOME} element={<HomePage />} />
            </Route>
          </Route>

          {/* Public Routes */}
          <Route path={PATH_NAME.LOGIN} element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
