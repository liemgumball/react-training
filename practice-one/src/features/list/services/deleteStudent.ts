import { DATABASE_RESOURCES } from '@constants/services';
import { apiRequest } from '@services/apiRequest';

export const removeStudent = async (studentId: string) => {
  try {
    return await apiRequest(
      `${process.env.API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}/${studentId}`,
      'DELETE'
    );
  } catch (err) {
    alert((err as Error).message);
  }
};
