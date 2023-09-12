import Authentication from '@features/authentication'
import { Dispatch, SetStateAction } from 'react'

type LoginPageProps = {
  setIsLoggedIn: Dispatch<
    SetStateAction<{ isLoggedIn: boolean; accessToken: string; name: string }>
  >
}

const LoginPage: React.FC<LoginPageProps> = ({ setIsLoggedIn }) => {
  return (
    <div className="gradient-custom min-h-screen w-screen flex justify-center items-center">
      <Authentication setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default LoginPage
