import { API_GATEWAY, DATABASE_RESOURCES } from '@constants/constant'
import List from '@features/list'
import StudentListItem, {
  TStudent,
} from '@features/list/components/StudentListItem'
import { useDeferredValue } from 'react'

type StudentPageProps = {
  searchText: string
}

const StudentPage = ({ searchText }: StudentPageProps) => {
  const keywords = useDeferredValue(searchText)

  const url = `${API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}?name_like=${keywords}`

  return (
    <article className="px-8">
      <header className="py-3 flex justify-between items-center">
        <h1 className="text-3xl font-700">students list</h1>
        <button
          type="button"
          className="border rounded-lg px-5 py-3 text-white bg-custom-yellow uppercase hover:shadow-lg"
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
  )
}

export default StudentPage
