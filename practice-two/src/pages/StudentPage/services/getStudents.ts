import api from '@services/apiRequest';
import { TStudent } from '@utils/types';

export const getStudents = async (url: string) => {
  console.log('caching students');
  return (await api.get(url)) as TStudent[];
};
