import { Outlet } from 'react-router-dom';
import Header from './Header';
import SearchQueryProvider from '@contexts/SearchQuery';
import { Suspense, lazy } from 'react';
import Loader from '@utils/Loader';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@utils/ErrorFallback';
import { QueryClient, QueryClientProvider } from 'react-query';

const Sidebar = lazy(() => import('./Sidebar'));

const queryClient = new QueryClient();

const MainLayout = () => {
  return (
    <div className="bg-white flex capitalize h-screen">
      <Sidebar />
      <main className="w-full min-w-min relative overflow-y-scroll">
        <SearchQueryProvider>
          {/* Error Boundary */}
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              window.location.reload(); // reload window to reset error
            }}
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
        </SearchQueryProvider>
      </main>
    </div>
  );
};

export default MainLayout;
