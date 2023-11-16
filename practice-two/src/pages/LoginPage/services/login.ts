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
    switch ((err as Error).message) {
      case '400':
        throw new Error(ERROR_MSG.WRONG_EMAIL_OR_PASSWORD);
      case '404':
        throw new Error(ERROR_MSG.PROCESS_FAILED);
      default:
        throw err;
    }
  }
};
