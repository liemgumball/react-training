import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    Component: lazy(() => import('@utils/PrivateRoutes')),
    children: [
      {
        Component: lazy(() => import('@layouts/MainLayout')),
        children: [
          {
            path: '/',
            Component: lazy(() => import('@pages/DashBoardPage')),
          },
          {
            path: '/students',
            Component: lazy(() => import('@pages/StudentPage')),
          },
          {
            path: '/payments',
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
    path: '/login',
    Component: lazy(() => import('@pages/LoginPage')),
  },
]);

export default router;
