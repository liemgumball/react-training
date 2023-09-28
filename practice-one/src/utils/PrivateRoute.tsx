import { Navigate, Outlet, RouteProps } from 'react-router-dom';
import { PATH_NAME } from '@constants/services';
import { AuthType } from '@constants/types';

type PrivateRouteProps = RouteProps & {
  auth: AuthType;
};

const PrivateRoute = ({ auth }: PrivateRouteProps) => {
  return auth ? <Outlet /> : <Navigate to={PATH_NAME.LOGIN} />; // navigate to login if not logged in
};

export default PrivateRoute;
