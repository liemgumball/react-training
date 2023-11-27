import { render, screen, fireEvent } from '@testing-library/react';
import PaymentListItem from '.';
import { NOTIFIES_MSG } from '@constants/messages';
import { TPayment } from 'src/types';

const mockPayment = {
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

describe('PaymentListItem component', () => {
  // Mock window.alert
  const originalAlert = window.alert;
  beforeEach(() => {
    window.alert = vi.fn();
  });

  afterEach(() => {
    window.alert = originalAlert;
  });

  it('renders payment data and handles view details click', () => {
    render(<PaymentListItem payment={mockPayment} />);

    // Assert that payment data is rendered
    expect(screen.getByText('Verna Senger')).toBeInTheDocument();
    expect(screen.getByText('832734803')).toBeInTheDocument();
    expect(screen.getByText('inr 436,135,112')).toBeInTheDocument();
    expect(screen.getByText('inr 704,937,932')).toBeInTheDocument();
    expect(screen.getByText('Sep 08, 2023')).toBeInTheDocument();

    // Trigger view details click
    fireEvent.click(screen.getByAltText('eye'));

    // Assert that the alert message is called
    expect(window.alert).toHaveBeenCalledWith(NOTIFIES_MSG.FUTURE_FEATURE);
  });
});
