import api from '@services/api-request';
import { login } from '.'; // Update with the correct path
import { LoginInputs } from '../../pages/LoginPage/components/LoginForm';
import { ERROR_MSG } from '@constants/messages';

vi.mock('@services/apiRequest', () => ({
  default: {
    post: vi.fn(),
  },
}));

describe('login function', () => {
  const mockApiPost = vi.spyOn(api, 'post');

  beforeEach(() => {
    // Clear mock calls before each test
    vi.clearAllMocks();
  });

  const loginInputs = {
    email: 'test@example.com',
    password: 'test-password',
  } as LoginInputs;

  it('should successfully log in and return AuthType', async () => {
    const mockAuthResponse = {
      accessToken: 'access-token',
      user: {
        email: 'user@example.com',
        name: 'User',
        id: 123,
      },
    };

    mockApiPost.mockResolvedValue(mockAuthResponse);

    const result = await login(loginInputs);

    expect(mockApiPost).toHaveBeenCalledWith(
      `${import.meta.env.VITE_API_URL}/login`,
      loginInputs
    );
    expect(result).toEqual(mockAuthResponse);
  });

  it('should throw an error for 400 status code', async () => {
    const errorResponse = new Error('400');
    mockApiPost.mockRejectedValue(errorResponse);

    await expect(login(loginInputs)).rejects.toThrowError(
      ERROR_MSG.WRONG_EMAIL_OR_PASSWORD
    );
  });

  it('should throw an error for 404 status code', async () => {
    const errorResponse = new Error('404');
    mockApiPost.mockRejectedValue(errorResponse);

    await expect(login(loginInputs)).rejects.toThrowError(
      ERROR_MSG.PROCESS_FAILED
    );
  });

  it('should throw the original error for other cases', async () => {
    const originalError = new Error('Some other error');
    mockApiPost.mockRejectedValue(originalError);

    await expect(login(loginInputs)).rejects.toThrowError(originalError);
  });
});
