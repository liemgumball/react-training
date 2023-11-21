import api from '@services/apiRequest';
import { DATABASE_RESOURCES } from '@constants/services';
import { StudentInputs } from 'src/types';

export const saveStudent = (inputData: StudentInputs) => {
  return inputData.id
    ? api.patch(
        `${import.meta.env.VITE_API_URL}/${DATABASE_RESOURCES.STUDENTS}/${
          inputData.id
        }`,
        inputData
      )
    : api.post(
        `${import.meta.env.VITE_API_URL}/${DATABASE_RESOURCES.STUDENTS}`,
        inputData
      );
};
