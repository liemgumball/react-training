import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { PATH_NAME } from '@constants/services';

const router = createBrowserRouter([
  {
    Component: lazy(() => import('@components/PrivateRoutes')),
    children: [
      {
        Component: lazy(() => import('@components/MainLayout')),
        children: [
          {
            path: PATH_NAME.HOME,
            Component: lazy(() => import('@pages/DashBoardPage')),
          },
          {
            path: PATH_NAME.STUDENTS,
            Component: lazy(() => import('@pages/StudentPage')),
          },
          {
            path: PATH_NAME.PAYMENTS,
            Component: lazy(() => import('@pages/PaymentPage')),
          },
          {
            path: '/*',
            Component: lazy(() => import('@pages/EmptyPage')),
          },
        ],
      },
    ],
  },
  {
    path: PATH_NAME.LOGIN,
    Component: lazy(() => import('@pages/LoginPage')),
  },
  {
    path: PATH_NAME.RESET_PASSWORD,
    Component: lazy(() => import('@pages/EmptyPage')),
  },
]);

export default router;
