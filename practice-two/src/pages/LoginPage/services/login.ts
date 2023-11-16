import { LoginInputs } from '../components/LoginForm';
import api from '@services/apiRequest';
import { AuthType } from '@contexts/Authentication';
import { ERROR_MSG } from '@constants/messages';

export const login = async (
  data: LoginInputs
): Promise<AuthType | undefined> => {
  const { email, password } = data;

  try {
    const response = await api.post(`${process.env.API_GATEWAY}/login`, {
      email,
      password,
    });

    return response as AuthType;
  } catch (err) {
    if ((err as Error).message === '400') {
      throw new Error(ERROR_MSG.WRONG_EMAIL_OR_PASSWORD);
    }

    throw err;
  }
};
