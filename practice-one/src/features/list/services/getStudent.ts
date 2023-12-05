import { apiRequest } from '@services/apiRequest';
import { DATABASE_RESOURCES } from '@constants/services';
import { TStudent } from '@utils/types';

export const getStudent = async (studentId: string) => {
  try {
    return (await apiRequest(
      `${process.env.API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}/${studentId}`,
      'GET'
    )) as TStudent;
  } catch (err) {
    alert((err as Error).message);
  }
};
