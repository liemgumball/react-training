import api from '@services/apiRequest';
import { TStudent } from '@utils/types';

export const getStudents = async (url: string) => {
  return (await api.get(url)) as TStudent[];
};
