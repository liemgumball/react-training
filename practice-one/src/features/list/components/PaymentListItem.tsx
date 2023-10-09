import formatAmount from '@utils/formatAmount';

// images
import eye from '@assets/eye.svg';
import { TPayment } from '@utils/types';
import Button from '@components/Button';

type PaymentListItemProps = {
  data: TPayment;
};

const PaymentListItem: React.FC<PaymentListItemProps> = (
  props: PaymentListItemProps
) => {
  const { data } = props;

  return (
    <li data-id={data.id} className="my-2 grid payment">
      <p className="truncate">{data.student?.name}</p>
      <p className="truncate">first</p>
      <p className="truncate">{data.billNumber}</p>
      <p className="truncate uppercase">inr {formatAmount(data.paid)}</p>
      <p className="truncate uppercase">inr {formatAmount(data.balance)}</p>
      <p className="truncate">{new Date(data.createdAt).toDateString()}</p>
      <div className="action-group flex gap-x-2 justify-end">
        <Button className="view-details-btn hover:bg-white">
          <img src={eye} alt="eye" />
        </Button>
      </div>
    </li>
  );
};

export default PaymentListItem;
