import StudentForm, { StudentFormDataType } from '@features/studentForm'
import { useDeferredValue, useReducer, useState } from 'react'
import { TStudent } from '@features/studentList/components/StudentListItem'
import StudentList from '@features/studentList'

type StudentPageProps = {
  searchText: string
}

export type FormActionType = {
  type: string
  title?: string
  data?: TStudent
}

export type StudentFormProps = {
  show: boolean
  title?: string
  data?: StudentFormDataType
}

function reducer(state: StudentFormProps, action: FormActionType) {
  switch (action.type) {
    case 'add':
      return { show: true, title: action.title }
    case 'edit':
      return {
        show: true,
        title: action.title,
        data: action.data,
      }
    case 'close':
      return { show: false }

    default:
      return state
  }
}

const StudentPage = ({ searchText }: StudentPageProps) => {
  const [formState, dispatch] = useReducer(reducer, {
    show: false,
  } as StudentFormProps)

  const [updatedStudents, setUpdatedStudents] = useState(false)

  const keyword = useDeferredValue(searchText)

  return (
    <>
      <article className="px-8">
        <header className="py-3 flex justify-between items-center sticky top-0 bg-white border-b">
          <h1 className="text-3xl font-700">students list</h1>
          <button
            type="button"
            className="border rounded-lg px-5 py-3 text-white bg-custom-yellow uppercase hover:shadow-lg"
            onClick={(e) => {
              e.preventDefault()
              dispatch({ type: 'add', title: 'add student' })
            }}
          >
            add new student
          </button>
        </header>
        <hr />
        <div className="students py-3 whitespace-no-wrap">
          <div className="list-heading grid text-custom-medium-gray font-600">
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
            setFormAction={dispatch}
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
          onClick={() => dispatch({ type: 'close' })}
        ></div>
        <StudentForm
          title={formState.title}
          data={formState.data}
          setFormAction={dispatch}
          setUpdateStudents={setUpdatedStudents}
        />
      </div>
    </>
  )
}

export default StudentPage
