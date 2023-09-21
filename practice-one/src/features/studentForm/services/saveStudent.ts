import { apiRequest } from '@services/apiRequest'
import { StudentFormDataType } from '..'
import { API_GATEWAY, DATABASE_RESOURCES } from '@constants/services'
import { TStudent } from '@features/list/components/StudentListItem'

export const saveStudent = async (student: StudentFormDataType) => {
  try {
    return (await apiRequest<TStudent>(
      `${API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}/${student.id}`,
      student.id ? 'PATCH' : 'POST', // method based on student id
      {
        id: student.id,
        ...student,
        createdAt: new Date().toISOString(),
        avatar: 'https://loremflickr.com/60/60', //fake random avatar
      }
    )) as TStudent
  } catch (err) {
    alert((err as Error).message)
  }
}
