import Authentication from '@features/authentication'
import { Dispatch, SetStateAction } from 'react'
import { authType } from 'src/App'

type LoginPageProps = {
  setAuth: Dispatch<SetStateAction<authType>>
}

const LoginPage: React.FC<LoginPageProps> = ({ setAuth }) => {
  return (
    <div className="gradient-custom min-h-screen w-screen flex justify-center items-center">
      <Authentication setAuth={setAuth} />
    </div>
  )
}

export default LoginPage
