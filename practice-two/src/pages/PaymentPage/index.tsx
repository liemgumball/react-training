import { useContext } from 'react';
import { SearchQueryContext } from '@contexts/SearchQuery';
import useDebounce from '@hooks/useDebounce';
import { DATABASE_RESOURCES } from '@constants/services';
import { useQuery } from 'react-query';
import { TPayment } from 'src/types';
import api from '@services/apiRequest';
import List from '@components/List';
import PaymentListItem from './components/PaymentListItem';

const PaymentPage = () => {
  // Debounce the search query change
  const { searchQuery } = useContext(SearchQueryContext);
  const debouncedSearchQuery = useDebounce(searchQuery);

  // Get payments
  const url = `${import.meta.env.VITE_API_URL}/${DATABASE_RESOURCES.PAYMENTS}`;
  const query = `?_expand=student&?_sort=createdAt&_order=desc&q=${debouncedSearchQuery}`;

  const { data, isError, error, isLoading } = useQuery(
    ['payments', debouncedSearchQuery],
    async () => (await api.get(url + query)) as TPayment[]
  );

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
          {data && data.length ? (
            data.map((item) => <PaymentListItem key={item.id} data={item} />)
          ) : (
            <p className="text-custom-dark-gray text-center">not found</p>
          )}
        </List>
      </div>
    </article>
  );
};

export default PaymentPage;
