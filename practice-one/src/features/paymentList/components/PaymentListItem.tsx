import eye from '@assets/eye.svg'
import ButtonIcon from '@components/ButtonIcon'
import { TStudent } from '@features/studentList/components/StudentListItem'
import formatAmount from '@utils/formatAmount'

export type TPayment = {
  createdAt: string
  billNumber: number
  paid: number
  balance: number
  studentId: number
  id?: number
  student?: TStudent
}

type PaymentListItemProps = {
  data: TPayment
}

const PaymentListItem = (props: PaymentListItemProps) => {
  const { data } = props

  return (
    <li
      data-id={data.id}
      className="my-2 grid payment border rounded-xl items-center hover:bg-custom-beige font-400 transition"
    >
      <p className="truncate">{data.student?.name}</p>
      <p className="truncate">first</p>
      <p className="truncate">{data.billNumber}</p>
      <p className="truncate uppercase">inr {formatAmount(data.paid)}</p>
      <p className="truncate uppercase">inr {formatAmount(data.balance)}</p>
      <p className="truncate">{new Date(data.createdAt).toDateString()}</p>
      <div className="action-group flex gap-x-2 justify-end">
        <ButtonIcon iconSrc={eye} alt="eye" className="view-details-btn" />
      </div>
    </li>
  )
}

export default PaymentListItem
