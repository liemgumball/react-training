import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import { AuthType } from '@utils/types';

type MainLayoutProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  auth: AuthType;
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
};

const MainLayout = (props: MainLayoutProps) => {
  const { searchText, setSearchText, auth, setAuth } = props;

  return (
    <div className="bg-white flex capitalize h-screen">
      <Sidebar setAuth={setAuth} username={auth ? auth.name : 'admin'} />
      <main className="w-full min-w-min overflow-y-scroll">
        <Header searchText={searchText} setSearchText={setSearchText} />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
