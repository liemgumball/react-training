import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchQueryProvider from '@contexts/SearchQuery';

const MainLayout = () => {
  return (
    <div className="bg-white flex capitalize h-full min-h-screen">
      <Sidebar />
      <main className="w-full min-w-min">
        <SearchQueryProvider>
          <Header />
          <Outlet />
        </SearchQueryProvider>
      </main>
    </div>
  );
};

export default MainLayout;
