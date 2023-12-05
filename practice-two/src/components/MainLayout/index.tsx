import { Suspense, lazy } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Loader from '@components/Loader';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@components/ErrorFallback';
import { QueryClient, QueryClientProvider } from 'react-query';

const Sidebar = lazy(() => import('../Sidebar'));

const queryClient = new QueryClient();

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex capitalize h-screen">
      <Sidebar />
      <main className="w-full min-w-min relative overflow-y-scroll">
        {/* Error Boundary */}
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => navigate({ search: '', hash: '' }, { replace: true })} // reset search and hash
        >
          {/* Client query  */}
          <QueryClientProvider client={queryClient}>
            <Header />
            {/* Suspense for navigation between pages */}
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </QueryClientProvider>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default MainLayout;
