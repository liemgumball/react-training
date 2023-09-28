import PaymentList from '@features/paymentList';
import useDebounce from '@hooks/useDebounce';

type PaymentPageProps = {
  searchText: string;
};

const PaymentPage = ({ searchText }: PaymentPageProps) => {
  const keyword = useDebounce(searchText);

  return (
    <article className="px-8 min-w-min">
      <header className="py-3 flex justify-between items-center bg-white border-b">
        <h1 className="text-3xl font-700">payments list</h1>
      </header>
      <hr />
      <div className="payments py-3">
        <div className="list-heading grid text-custom-medium-gray font-600 whitespace-nowrap">
          <span>name</span>
          <span>payment schedule</span>
          <span>bill number</span>
          <span>amount paid</span>
          <span>balance amount</span>
          <span>date</span>
          <span></span>
        </div>
        <PaymentList keyword={keyword}></PaymentList>
      </div>
    </article>
  );
};

export default PaymentPage;
