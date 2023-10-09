import { apiRequest } from '@services/apiRequest';

// constants
import { DATABASE_RESOURCES } from '@constants/services';
import { StudentFormDataType, TStudent } from '@utils/types';

export const saveStudent = async (student: StudentFormDataType) => {
  try {
    return (await apiRequest<StudentFormDataType | TStudent>(
      `${process.env.API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}/${
        student.id ? student.id : ''
      }`,
      student.id ? 'PATCH' : 'POST', // method based on student id
      student.id
        ? student
        : {
            ...student,
            createdAt: new Date().toISOString(),
            avatar: 'https://loremflickr.com/60/60', //fake random avatar
          }
    )) as TStudent;
  } catch (err) {
    alert((err as Error).message);
  }
};
