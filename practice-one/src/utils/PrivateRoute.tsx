import { PATH_NAME } from '@constants/services';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';
import { AuthType } from 'src/App';

type PrivateRouteProps = RouteProps & {
  auth: AuthType;
};

const PrivateRoute = ({ auth }: PrivateRouteProps) => {
  return auth.accessToken ? <Outlet /> : <Navigate to={PATH_NAME.LOGIN} />; // navigate to login if not logged in
};

export default PrivateRoute;
