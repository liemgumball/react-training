import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import { login } from './services/login'
import InputWithErrorMsg from '@components/inputWithErrorMsg'
import { emailRegex, passwordRegex } from '@constants/regex'
import { ERROR_MSG } from '@constants/constant'
import bigLogo from '@assets/bigLogo.svg'
import { authType } from 'src/App'
import { useNavigate } from 'react-router-dom'

type authenticationProps = {
  setAuth: Dispatch<SetStateAction<authType>>
}

const Authentication: React.FC<authenticationProps> = ({ setAuth }) => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)

  const passwordRef = useRef<HTMLInputElement | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)

  const handleLogin = async () => {
    setLoading(true)
    const emailValue = emailRef.current!.value.trim()
    const passwordValue = passwordRef.current!.value.trim()

    const emailIsValid = emailRegex.test(emailValue)
    const passwordIsValid = passwordRegex.test(passwordValue)

    if (!emailIsValid) {
      setEmailError(ERROR_MSG.INVALID_EMAIL)
    } else {
      setEmailError(null)
    }

    if (!passwordIsValid) {
      setPasswordError(ERROR_MSG.INVALID_PASSWORD)
    } else {
      setPasswordError(null)
    }

    if (emailIsValid && passwordIsValid) {
      const response = await login(emailValue, passwordValue)

      if (response instanceof Error) {
        setEmailError(response.message)
        setPasswordError(response.message)
      } else {
        setAuth({
          accessToken: response.accessToken,
          name: response.user.name,
        })
        navigate('/')
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
          // console.log('first')
          handleLogin()
        }}
      >
        <InputWithErrorMsg
          id="email"
          name="Email"
          type="text"
          placeholder="Enter your email"
          ref={emailRef}
          errorMsg={emailError}
        />
        <InputWithErrorMsg
          id="password"
          name="Password"
          type="text"
          placeholder="Enter your password"
          ref={passwordRef}
          errorMsg={passwordError}
        />
        <button
          className={`${
            loading ? 'bg-custom-dark-gray' : 'bg-custom-yellow'
          } w-full mb-5 p-3 font-500 text-white uppercase rounded-md hover:shadow-lg`}
          type="submit"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Sign in'}
        </button>
        <p className="text-center">
          Forgot your password?{' '}
          <a className="text-custom-yellow underline" href="#">
            Reset Password
          </a>
        </p>
      </form>
    </div>
  )
}

export default Authentication
