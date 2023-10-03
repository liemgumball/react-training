import { ERROR_MSG, NOTIFICATION_MESSAGE } from '@constants/messages';
import { DATABASE_RESOURCES } from '@constants/services';
import List from '@features/list';
import PaymentListItem from '@features/list/components/PaymentListItem';
import useDebounce from '@hooks/useDebounce';
import { TPayment } from '@utils/types';

type PaymentPageProps = {
  searchText: string;
};

const PaymentPage = ({ searchText }: PaymentPageProps) => {
  const keyword = useDebounce(searchText);

  const url = `${process.env.API_GATEWAY}/${DATABASE_RESOURCES.PAYMENTS}?_expand=student&?_sort=createdAt&_order=desc&q=${keyword}`;

  const handleClick = async (e: React.MouseEvent<HTMLUListElement>) => {
    try {
      const dataId = (e.target as HTMLElement)
        .closest('li')
        ?.getAttribute('data-id');

      const btn = (e.target as HTMLUListElement).closest('button');

      if (btn && btn.classList.contains('view-details-btn')) {
        if (!dataId) {
          throw new Error(ERROR_MSG.MISSING_ID);
        } else {
          alert(NOTIFICATION_MESSAGE.FUTURE_FEATURE);
        }
      }
    } catch (err) {
      alert((err as Error).message);
    }
  };

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
        <List<TPayment>
          url={url}
          ItemComponent={PaymentListItem}
          onClick={handleClick}
        />
      </div>
    </article>
  );
};

export default PaymentPage;
