import { apiRequest } from '@services/apiRequest'
import { StudentFormDataType } from '..'
import { API_GATEWAY, DATABASE_RESOURCES } from '@constants/services'
import { TStudent } from '@features/list/components/StudentListItem'

export const addStudent = async (student: StudentFormDataType) => {
  try {
    return (await apiRequest<Omit<TStudent, 'id'>>(
      `${API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}`,
      'POST',
      {
        ...student,
        createdAt: new Date().toISOString(),
        avatar: 'https://loremflickr.com/640/480', //fake random avatar
      }
    )) as TStudent
  } catch (err) {
    alert((err as Error).message)
  }
}
