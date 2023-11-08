import { render } from '@testing-library/react';
import StudentListItem from '.';
import { TStudent } from '@utils/types';

const data = {
  createdAt: '2023-09-07T23:25:31.357Z',
  name: 'Verna Senger',
  avatar: 'https://loremflickr.com/60/60',
  email: 'Aglae61@yahoo.com',
  phone: '0931009009',
  enrollNumber: 768475388,
  id: 1,
} as TStudent;

describe('Student list item component', () => {
  it('should render a student list item', () => {
    const { getAllByRole } = render(<StudentListItem data={data} />);

    // Check that the <img> element has the correct 'alt' attribute
    expect(getAllByRole('img')[0]).toHaveAttribute('alt', 'student avatar');

    // Check that the data-id attribute on the root element is correct
    expect(getAllByRole('listitem')[0]).toHaveAttribute('data-id', '1');
  });
});
