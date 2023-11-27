import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { login } from '../../services/login';
import Button from '@components/Button';
import Input from '@components/Input';
import { AuthContext } from '@contexts/Authentication';
import { emailRegex, passwordRegex } from '@constants/regex';
import { ERROR_MSG } from '@constants/messages';

export type LoginInputs = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const { setAuth } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted, isSubmitting },
    setError,
  } = useForm<LoginInputs>();

  const onValid: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const auth = await login(data);
      if (auth && setAuth) setAuth(auth); // if login successfully
    } catch (err) {
      const errorMessage = (err as Error).message;
      // set errors for inputs field
      setError('email', { type: 'value', message: errorMessage });
      setError('password', { type: 'value', message: errorMessage });
    }
  };

  return (
    <form
      method="post"
      role="form"
      autoComplete="off"
      className="flex flex-col text-left"
      onSubmit={handleSubmit(onValid)}
    >
      <label className="text-custom-dark-gray capitalize" htmlFor="email">
        email
      </label>
      <Input
        id="email"
        type="text"
        placeholder="Enter your email"
        autoFocus
        inValid={!!errors.email}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: emailRegex,
            message: ERROR_MSG.INVALID_EMAIL,
          },
        })}
      />
      {errors.email && (
        <p
          className="text-red-500 text-xs transition duration-500"
          role="alert"
        >
          {errors.email.message}
        </p>
      )}

      <label
        className="text-custom-dark-gray mt-10 capitalize"
        htmlFor="password"
      >
        password
      </label>
      <Input
        id="password"
        type="password"
        placeholder="Enter your password"
        inValid={!!errors.password}
        {...register('password', {
          required: 'Password is required',
          pattern: {
            value: passwordRegex,
            message: ERROR_MSG.INVALID_PASSWORD,
          },
        })}
      />
      {errors.password && (
        <p
          className="text-red-500 text-xs transition duration-500"
          role="alert"
        >
          {errors.password.message}
        </p>
      )}

      <Button
        primary
        type="submit"
        className="text-white uppercase text-700 mt-8"
        disabled={(!isValid && isSubmitted) || isSubmitting}
      >
        {isSubmitting ? 'Loading...' : 'sign in'}
      </Button>
    </form>
  );
};

LoginForm.whyDidYouRender = true;

export default LoginForm;
