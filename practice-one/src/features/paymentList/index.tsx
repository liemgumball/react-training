import List from '@components/List';
import PaymentListItem from './components/PaymentListItem';

// constants
import { DATABASE_RESOURCES } from '@constants/services';
import { ERROR_MSG, NOTIFICATION_MESSAGE } from '@constants/messages';

type PaymentListProps = {
  keyword: string;
};

const PaymentList = (props: PaymentListProps) => {
  const { keyword } = props;

  // the request will be called automatically every time this url changes
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
    <List
      ItemComponent={PaymentListItem}
      onClick={handleClick}
      url={url}
    ></List>
  );
};

export default PaymentList;
