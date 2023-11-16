import { DATABASE_RESOURCES } from '@constants/services';
import api from '@services/apiRequest';

export const getStudentById = (id: string) =>
  api.get(`${process.env.API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}/${id}`);
