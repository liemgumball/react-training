import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from '@utils/Loader';

import AuthProvider from '@contexts/Authentication';
import PrivateRoutes from '@utils/PrivateRoutes';
import { PATH_NAME } from '@constants/services';

// pages & layouts
const LoginPage = lazy(() => import('@pages/LoginPage'));
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const EmptyPage = lazy(() => import('@pages/EmptyPage'));
const HomePage = lazy(() => import('@pages/HomePage'));
const StudentPage = lazy(() => import('@pages/StudentPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <AuthProvider>
          <Routes>
            {/* Private Routes */}
            <Route element={<PrivateRoutes />}>
              <Route element={<MainLayout />}>
                <Route path={PATH_NAME.HOME} element={<HomePage />} />
                <Route path={PATH_NAME.STUDENTS} element={<StudentPage />} />
                <Route path="*" element={<EmptyPage />} />
              </Route>
            </Route>

            {/* Public Routes */}
            <Route path={PATH_NAME.LOGIN} element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </Suspense>
    </Router>
  );
}

export default App;
