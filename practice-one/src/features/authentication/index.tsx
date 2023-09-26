import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthType } from 'src/App'
import InputWithErrorMsg from '@components/InputWithErrorMsg'
import Button from '@components/Button'
import { login } from './services/login'

// constants
import { PATH_NAME } from '@constants/services'
import { ERROR_MSG } from '@constants/messages'
import { emailRegex, passwordRegex } from '@constants/regex'
import bigLogo from '@assets/bigLogo.svg'

type authenticationProps = {
  setAuth: Dispatch<SetStateAction<AuthType>>
}

const Authentication: React.FC<authenticationProps> = ({ setAuth }) => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState<boolean>(false)

  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const [formError, setFormError] = useState<{
    email: string | null
    password: string | null
  }>({ email: null, password: null })

  const handleLogin = async () => {
    setLoading(true)

    const emailValue = emailRef.current!.value.trim()
    const passwordValue = passwordRef.current!.value.trim()

    const emailIsValid = emailRegex.test(emailValue)
    const passwordIsValid = passwordRegex.test(passwordValue)

    setFormError({
      email: emailIsValid ? null : ERROR_MSG.INVALID_EMAIL,
      password: passwordIsValid ? null : ERROR_MSG.INVALID_PASSWORD,
    })

    if (emailIsValid && passwordIsValid) {
      const response = await login(emailValue, passwordValue)

      if (response instanceof Error) {
        setFormError({
          email: response.message,
          password: response.message,
        })
      } else {
        setAuth({
          accessToken: response.accessToken,
          name: response.user.name,
        })
        navigate(PATH_NAME.HOME)
      }
    }

    setLoading(false)
  }

  return (
    <div className="login-card capitalize bg-white p-8 rounded-lg shadow-lg text-black text-sm text-center flex flex-col gap-y-10 justify-between">
      <div className="flex items-center justify-center">
        <img src={bigLogo} alt="logo" className="mr-2" />
        <h1 className="text-3xl uppercase font-semibold">CRUD operations</h1>
      </div>
      <div>
        <h2 className="uppercase font-semibold text-2xl">sign in</h2>
        <p className="text-custom-dark-gray">
          Enter your credentials to access your account
        </p>
      </div>
      <form
        className="text-left"
        onSubmit={(e) => {
          e.preventDefault()
          handleLogin()
        }}
      >
        <InputWithErrorMsg
          showLabel
          id="email"
          name="Email"
          type="text"
          placeholder="Enter your email"
          ref={emailRef}
          errorMsg={formError?.email}
        />
        <InputWithErrorMsg
          showLabel
          id="password"
          name="Password"
          type="text"
          placeholder="Enter your password"
          ref={passwordRef}
          errorMsg={formError?.password}
        />
        <Button
          className={`${
            loading ? 'bg-custom-dark-gray' : 'bg-custom-yellow'
          } w-full mb-5 text-white uppercase`}
          type="submit"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Sign in'}
        </Button>
        <p className="text-center">
          Forgot your password?{' '}
          <a
            className="text-custom-yellow underline"
            href={PATH_NAME.EMPTY_PAGE}
          >
            Reset Password
          </a>
        </p>
      </form>
    </div>
  )
}

export default Authentication
