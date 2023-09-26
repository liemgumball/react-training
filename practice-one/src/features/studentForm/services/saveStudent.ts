import { TStudent } from '@features/studentList/components/StudentListItem'
import { apiRequest } from '@services/apiRequest'
import { StudentFormDataType } from '../hooks/useStudentForm'

// constants
import { API_GATEWAY, DATABASE_RESOURCES } from '@constants/services'

export const saveStudent = async (student: StudentFormDataType) => {
  try {
    return (await apiRequest<StudentFormDataType | TStudent>(
      `${API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}/${
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
    )) as TStudent
  } catch (err) {
    alert((err as Error).message)
  }
}
