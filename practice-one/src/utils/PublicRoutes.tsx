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
  navTo = '/login',
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
