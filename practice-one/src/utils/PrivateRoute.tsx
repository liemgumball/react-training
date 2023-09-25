import { PATH_NAME } from '@constants/services'
import { Navigate, Outlet, RouteProps } from 'react-router-dom'
import { AuthType } from 'src/App'

type PrivateRouteProps = RouteProps & {
  auth: AuthType
}

const PrivateRoute = ({ auth }: PrivateRouteProps) => {
  if (!auth.accessToken) {
    // Redirect to the login page if not authenticated
    return <Navigate to={PATH_NAME.LOGIN} />
  }

  return <Outlet />
}

export default PrivateRoute
