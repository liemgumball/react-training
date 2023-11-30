import useDebounce from '@hooks/useDebounce';
import List from '@components/List';
import PaymentListItem from './components/PaymentListItem';
import usePaymentQuery from './hooks/usePaymentQuery';
import { useSearchParams } from 'react-router-dom';

const PaymentPage = () => {
  // Debounce the search query change
  const [searchParams] = useSearchParams({ q: '' });
  const debouncedSearchQuery = useDebounce(searchParams.get('q') || '');

  // Get payments
  const query = `?_expand=student&?_sort=createdAt&_order=desc&q=${debouncedSearchQuery}`;

  const { payments, isError, error, isLoading } = usePaymentQuery({
    query: query,
  });

  return (
    <article className="px-8 min-w-min">
      <header className="py-3 flex justify-between items-center bg-white border-b">
        <h1 className="text-3xl font-700">payments list</h1>
      </header>
      <hr />
      <div className="payments py-3">
        <div className="payment-list-heading grid text-custom-medium-gray font-600 whitespace-nowrap">
          <span>name</span>
          <span>payment schedule</span>
          <span>bill number</span>
          <span>amount paid</span>
          <span>balance amount</span>
          <span>date</span>
          <span></span>
        </div>
        <List isError={isError} isLoading={isLoading} error={error as Error}>
          {payments && payments.length ? (
            payments.map((item) => (
              <PaymentListItem key={item.id} payment={item} />
            ))
          ) : (
            <p className="text-custom-dark-gray text-center">not found</p>
          )}
        </List>
      </div>
    </article>
  );
};

export default PaymentPage;
