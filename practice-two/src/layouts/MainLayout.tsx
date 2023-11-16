import { Outlet } from 'react-router-dom';
import Header from './Header';
import SearchQueryProvider from '@contexts/SearchQuery';
import { Suspense, lazy } from 'react';
import Loader from '@utils/Loader';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@utils/ErrorFallback';

const Sidebar = lazy(() => import('./Sidebar'));

const MainLayout = () => {
  return (
    <div className="bg-white flex capitalize h-full min-h-screen">
      <Sidebar />
      <main className="w-full min-w-min relative">
        <SearchQueryProvider>
          {/* Error Boundary  */}
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
              window.location.reload(); // reload to reset
            }}
          >
            <Header />
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </SearchQueryProvider>
      </main>
    </div>
  );
};

export default MainLayout;
