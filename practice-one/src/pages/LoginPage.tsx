import Authentication from '@features/authentication'
import { Dispatch, SetStateAction } from 'react'
import { AuthType } from 'src/App'

type LoginPageProps = {
  setAuth: Dispatch<SetStateAction<AuthType>>
}

const LoginPage: React.FC<LoginPageProps> = ({ setAuth }) => {
  return (
    <div className="bg-gradient-custom min-h-screen w-screen flex justify-center items-center">
      <Authentication setAuth={setAuth} />
    </div>
  )
}

export default LoginPage
