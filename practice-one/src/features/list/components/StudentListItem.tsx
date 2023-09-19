import pen from '@assets/pen.svg'
import trash from '@assets/trash.svg'
import ButtonIcon from '@components/ButtonIcon'

export type TStudent = {
  createdAt: string
  name: string
  avatar: string
  email: string
  phone: string
  enrollNumber: number
  id: number
}

type StudentListItemProps = {
  data: TStudent
}

const StudentListItem: React.FC<StudentListItemProps> = (props) => {
  const { data } = props

  return (
    <li className="my-2 grid student border rounded-xl items-center hover:bg-custom-beige cursor-pointer font-400 whitespace-no-wrap truncate">
      <div>
        <img
          src={data.avatar}
          alt="student avatar"
          loading="lazy"
          width="60px"
          height="60px"
        />
      </div>
      <div>{data.name}</div>
      <div>{data.email}</div>
      <div>{data.phone}</div>
      <div>{data.enrollNumber}</div>
      <div>{new Date(data.createdAt).toDateString()}</div>
      <div className="action-group flex gap-x-2 justify-end">
        <ButtonIcon iconSrc={trash} alt="trash" />
        <ButtonIcon iconSrc={pen} alt="pen" />
      </div>
    </li>
  )
}

export default StudentListItem
