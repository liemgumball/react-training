import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import AuthProvider from '@contexts/Authentication';
import PrivateRoutes from '@utils/PrivateRoutes';
import Loader from '@utils/Loader';
import { PATH_NAME } from '@constants/services';

// pages & layouts
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const LoginPage = lazy(() => import('@pages/LoginPage'));
const EmptyPage = lazy(() => import('@pages/EmptyPage'));
const DashBoardPage = lazy(() => import('@pages/DashBoardPage'));
const StudentPage = lazy(() => import('@pages/StudentPage'));
const PaymentPage = lazy(() => import('@pages/PaymentPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <AuthProvider>
          <Routes>
            {/* Private Routes */}
            <Route element={<PrivateRoutes />}>
              <Route element={<MainLayout />}>
                <Route path={PATH_NAME.HOME} element={<DashBoardPage />} />
                <Route path={PATH_NAME.STUDENTS} element={<StudentPage />} />
                <Route path={PATH_NAME.PAYMENTS} element={<PaymentPage />} />
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
