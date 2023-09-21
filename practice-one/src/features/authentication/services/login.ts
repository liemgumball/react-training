import { ERROR_MSG } from '@constants/messages'
import { API_GATEWAY, DATABASE_RESOURCES } from '@constants/services'
import { apiRequest } from '@services/apiRequest'

type loginResponse = {
  accessToken: string
  user: {
    id: number
    name: string
    email: string
  }
}

type loginBody = {
  email: string
  password: string
}

export const login = async (email: string, password: string) => {
  try {
    return (await apiRequest<loginBody>(
      `${API_GATEWAY}/${DATABASE_RESOURCES.LOGIN}`,
      'POST',
      {
        email: email,
        password: password,
      }
    )) as loginResponse
  } catch (err) {
    if ((err as Error).message.toLowerCase() === 'bad request')
      return new Error(ERROR_MSG.WRONG_EMAIL_OR_PASSWORD)

    return new Error('Process got failed')
  }
}
