import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PATH_NAME } from '@constants/services';
import { AuthContext } from '@contexts/Authentication';

const PrivateRoutes = () => {
  const { auth } = useContext(AuthContext);

  return auth ? <Outlet /> : <Navigate to={PATH_NAME.LOGIN} />; // navigate to login page
};

export default PrivateRoutes;
