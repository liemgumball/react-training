import PaymentList from '@features/paymentList'
import useDebound from '@hooks/useDebound'

type PaymentPageProps = {
  searchText: string
}

const PaymentPage = ({ searchText }: PaymentPageProps) => {
  const keyword = useDebound(searchText)

  return (
    <article className="px-8">
      <header className="py-3 flex justify-between items-center sticky top-0 bg-white border-b">
        <h1 className="text-3xl font-700">payments list</h1>
      </header>
      <hr />
      <div className="payments py-3 whitespace-no-wrap">
        <div className="list-heading grid text-custom-medium-gray font-600 whitespace-nowrap">
          <div>name</div>
          <div>payment schedule</div>
          <div>bill number</div>
          <div>amount paid</div>
          <div>balance amount</div>
          <div>date</div>
          <div></div>
        </div>
        <PaymentList keyword={keyword}></PaymentList>
      </div>
    </article>
  )
}

export default PaymentPage
