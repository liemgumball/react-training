import { useState } from 'react'
import StudentList from '@features/studentList'
import StudentForm from '@features/studentForm'
import useDebounce from '@hooks/useDebounce'
import useStudentForm from '@features/studentForm/hooks/useStudentForm'
import Button from '@components/Button'

type StudentPageProps = {
  searchText: string
}

const StudentPage = ({ searchText }: StudentPageProps) => {
  const [formState, formAction] = useStudentForm()

  const [updatedStudents, setUpdatedStudents] = useState<boolean>(false)

  const keyword = useDebounce(searchText)

  return (
    <>
      <article className="px-8">
        <header className="py-3 flex justify-between items-center bg-white border-b">
          <h1 className="text-3xl font-700">students list</h1>
          <Button
            type="button"
            className="text-white bg-custom-yellow uppercase"
            onClick={(e) => {
              e.preventDefault()
              formAction({ type: 'add' })
            }}
          >
            add new student
          </Button>
        </header>
        <hr />
        <div className="students py-3 whitespace-no-wrap">
          <div className="list-heading grid text-custom-medium-gray font-600 whitespace-nowrap">
            <div></div>
            <div>name</div>
            <div>email</div>
            <div>phone</div>
            <div>enroll number</div>
            <div>date of admission</div>
            <div></div>
          </div>
          <StudentList
            keyword={keyword}
            setFormAction={formAction}
            updateStudentsTrigger={updatedStudents}
            setUpdateStudentsTrigger={setUpdatedStudents}
          ></StudentList>
        </div>
      </article>
      <div
        className={`${
          formState.show ? '' : 'invisible'
        } fixed inset-0 flex items-center justify-center`}
      >
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => formAction({ type: 'close' })}
        ></div>
        <StudentForm
          title={formState.title}
          data={formState.data}
          setFormAction={formAction}
          setUpdateStudents={setUpdatedStudents}
        />
      </div>
    </>
  )
}

export default StudentPage
