import api from '@services/apiRequest';
import { DATABASE_RESOURCES } from '@constants/services';
import { StudentInputs } from '@utils/types';

export const saveStudent = (inputData: StudentInputs) => {
  console.log('save students', inputData);
  return inputData.id
    ? api.patch(
        `${process.env.API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}/${inputData.id}`,
        inputData
      )
    : api.post(
        `${process.env.API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}`,
        inputData
      );
};
