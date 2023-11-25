import api from '@services/apiRequest';
import { STUDENTS_URL } from '@constants/services';
import { StudentInputs } from 'src/types';

export const saveStudent = (inputData: StudentInputs) => {
  return inputData.id
    ? api.patch(`${STUDENTS_URL}/${inputData.id}`, inputData)
    : api.post(`${STUDENTS_URL}`, inputData);
};
