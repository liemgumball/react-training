import { LoginInputs } from '../../pages/LoginPage/components/LoginForm';
import api from '@services/api-request';
import { AuthType } from '@contexts/Authentication';
import { ERROR_MSG } from '@constants/messages';

export const login = async (
  data: LoginInputs
): Promise<AuthType | undefined> => {
  try {
    const response = await api.post(
      `${import.meta.env.VITE_API_URL}/login`,
      data
    );

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
