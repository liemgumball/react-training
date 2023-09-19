import { API_GATEWAY, DATABASE_RESOURCES } from '@constants/constant'
import List from '@features/list'
import StudentForm from '@features/studentForm'
import { useDeferredValue, useState } from 'react'
import StudentListItem, {
  TStudent,
} from '@features/list/components/StudentListItem'

type StudentPageProps = {
  searchText: string
}

type FormPopupProps = {
  show: boolean
  title?: string
}

const StudentPage = ({ searchText }: StudentPageProps) => {
  const [formPopup, setFormPopup] = useState({
    show: false,
  } as FormPopupProps)
  const keywords = useDeferredValue(searchText)

  const url = `${API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}?name_like=${keywords}`

  return (
    <>
      <article className="px-8">
        <header className="py-3 flex justify-between items-center">
          <h1 className="text-3xl font-700">students list</h1>
          <button
            type="button"
            className="border rounded-lg px-5 py-3 text-white bg-custom-yellow uppercase hover:shadow-lg"
            onClick={(e) => {
              e.preventDefault()
              setFormPopup({ show: true })
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
          <List<TStudent> url={url} ItemComponent={StudentListItem}></List>
        </div>
      </article>
      <div
        className={`${
          formPopup.show ? '' : 'invisible'
        } fixed inset-0 flex items-center justify-center`}
      >
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setFormPopup({ show: false })}
        ></div>
        <StudentForm />
      </div>
    </>
  )
}

export default StudentPage
