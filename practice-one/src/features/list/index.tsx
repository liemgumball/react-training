import useFetch from '@hooks/useFetch'
import StudentListItem, { TStudent } from './components/StudentListItem'
import PaymentListItem, { TPayment } from './components/PaymentListItem'

type ListProps = {
  url: string
  type: 'students' | 'payments'
}

const List = ({ url, type }: ListProps) => {
  const ItemComponent = type === 'students' ? StudentListItem : PaymentListItem

  const { data, error, loading } = useFetch<TStudent[] | TPayment[]>(url)

  console.log(data, error, loading)

  return (
    <>
      {error && <p>{error.message}</p>}
      <ul>
        {loading ? (
          <li>Loading...</li>
        ) : data ? (
          data.map((item, idx) => (
            <ItemComponent
              key={item.id || idx}
              data={item as TStudent & TPayment}
            />
          ))
        ) : (
          <li>Not found</li>
        )}
      </ul>
    </>
  )
}

export default List
