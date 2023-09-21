import List from '@components/List'
import { FormActionType } from 'src/pages/StudentPage'
import StudentListItem from './components/StudentListItem'
import { API_GATEWAY, DATABASE_RESOURCES } from '@constants/services'
import { CONFIRM_MSG } from '@constants/messages'
import { getStudent } from '@features/studentForm/services/getStudent'
import { removeStudent } from '@features/studentForm/services/deleteStudent'

type StudentListProps = {
  setFormAction: React.Dispatch<FormActionType>
  keyword: string
  updateStudentsTrigger: boolean
  setUpdateStudentsTrigger: React.Dispatch<React.SetStateAction<boolean>>
}

const StudentList = (props: StudentListProps) => {
  const {
    setFormAction,
    keyword,
    updateStudentsTrigger,
    setUpdateStudentsTrigger,
  } = props

  const url = `${API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}?_sort=createdAt&_order=desc&q=${keyword}`

  const handleClick = async (e: React.MouseEvent<HTMLUListElement>) => {
    const dataId = (e.target as HTMLElement)
      .closest('li')
      ?.getAttribute('data-id')

    const btn = (e.target as HTMLUListElement).closest('button')

    if (btn && btn.classList.contains('edit-btn')) {
      setFormAction({
        type: 'edit',
        title: 'edit student',
        data: await getStudent(dataId!),
      })
    }

    if (btn && btn.classList.contains('remove-btn')) {
      if (window.confirm(CONFIRM_MSG.REMOVE_STUDENT)) {
        await removeStudent(dataId!)
        setUpdateStudentsTrigger((p) => !p) //trigger rerender List of students
      }
    }
  }

  return (
    <List
      ItemComponent={StudentListItem}
      url={url}
      onClick={handleClick}
      updateTrigger={updateStudentsTrigger}
    ></List>
  )
}

export default StudentList
