import { PATH_NAME } from '@constants/services'
import { ReactNode, useEffect } from 'react'
import { Routes, useNavigate } from 'react-router-dom'
import { authType } from 'src/App'

type PublicRoutesProps = {
  auth: authType
  navTo?: string
  children?: ReactNode
}

const PublicRoutes = ({
  auth,
  navTo = PATH_NAME.LOGIN,
  children,
}: PublicRoutesProps) => {
  const nav = useNavigate()

  useEffect(() => {
    if (!auth.accessToken) nav(navTo)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, navTo])

  return <Routes>{children}</Routes>
}

export default PublicRoutes
