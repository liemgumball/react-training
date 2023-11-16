import { render } from '@testing-library/react';
import PaymentListItem from '.';
import { TPayment } from '@utils/types';

const data = {
  createdAt: '2023-09-08T02:12:26.455Z',
  studentId: 1,
  billNumber: 832734803,
  paid: 436135112,
  balance: 704937932,
  id: 1,
  student: {
    createdAt: '2023-09-07T23:25:31.357Z',
    name: 'Verna Senger',
    avatar: 'https://loremflickr.com/60/60',
    email: 'Aglae61@yahoo.com',
    phone: '0931009009',
    enrollNumber: 768475388,
    id: 1,
  },
} as TPayment;

describe('Payment list item component', () => {
  it('should render a payment list item', () => {
    const { getAllByRole } = render(<PaymentListItem data={data} />);

    // Check that the <img> element has the correct 'alt' attribute
    expect(getAllByRole('img')[0]).toHaveAttribute('alt', 'eye');

    // Check that the data-id attribute on the root element is correct
    expect(getAllByRole('listitem')[0]).toHaveAttribute('data-id', '1');
  });
});
