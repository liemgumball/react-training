import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from '@components/Loader';
import router from './routes';
import AuthProvider from '@contexts/Authentication';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AuthProvider>
        <RouterProvider router={router} fallbackElement={<Loader />} />
      </AuthProvider>
    </Suspense>
  );
}

export default App;
