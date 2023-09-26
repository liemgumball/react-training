import { TStudent } from '@features/studentList/components/StudentListItem'
import { apiRequest } from '@services/apiRequest'
import { API_GATEWAY, DATABASE_RESOURCES } from '@constants/services'

export const getStudent = async (studentId: string) => {
  try {
    return (await apiRequest(
      `${API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}/${studentId}`,
      'GET'
    )) as TStudent
  } catch (err) {
    alert((err as Error).message)
  }
}
