import Button from '@components/Button';
import formatAmount from '@utils/formatAmount';
import { TPayment } from '@utils/types';
import eye from '@assets/eye.svg';
import { formatDate } from '@utils/formatDate';

type PaymentListItemProps = {
  data: TPayment;
  isFetching?: boolean;
};

const PaymentListItem = ({ data, isFetching }: PaymentListItemProps) => {
  const { id, student, billNumber, paid, balance, createdAt } = data;

  return (
    <li
      data-id={id}
      className={`payment-list-item relative group ${
        isFetching ? 'opacity-50' : ''
      }`}
    >
      {/* prevent onClick if fetching */}
      {isFetching && <div className="absolute inset-0 z-50"></div>}

      <p className="truncate">{student?.name}</p>
      <p className="truncate">first</p>
      <p className="truncate">{billNumber}</p>
      <p className="truncate uppercase">inr {formatAmount(paid)}</p>
      <p className="truncate uppercase">inr {formatAmount(balance)}</p>
      <p className="truncate">{formatDate(createdAt)}</p>
      <div className="action-group flex gap-x-2 justify-end">
        <Button className="view-details-btn group-hover:bg-custom-light-pink group-hover:hover:bg-white">
          <img src={eye} alt="eye" loading="eager" />
        </Button>
      </div>
    </li>
  );
};

export default PaymentListItem;
