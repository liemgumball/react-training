import Button from '@components/Button';
import { formatDate, formatAmount } from '@services/format';
import { TPayment } from 'src/types';
import eye from '@assets/eye.svg';

type PaymentListItemProps = {
  data: TPayment;
};

const PaymentListItem = ({ data }: PaymentListItemProps) => {
  const { id, student, billNumber, paid, balance, createdAt } = data;

  return (
    <li data-id={id} className="payment-list-item relative group">
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
