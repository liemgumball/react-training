import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter for testing
import DashBoardCard from '.';

describe('DashBoardCard', () => {
  it('renders with the correct props', () => {
    const props = {
      variant: 'primary' as const,
      name: 'Test Card',
      mainInfo: 'Some main info',
      to: '/dashboard',
    };

    const { getByText, getByRole } = render(
      <MemoryRouter>
        <DashBoardCard {...props}>Content</DashBoardCard>
      </MemoryRouter>
    );

    const card = getByRole('link');
    const nameElement = getByText('Test Card');
    const mainInfoElement = getByText('Some main info');

    expect(card).toHaveClass('dashboard-card dashboard-card-primary');
    expect(nameElement).toBeInTheDocument();
    expect(mainInfoElement).toBeInTheDocument();
    expect(card).toHaveAttribute('href', '/dashboard');
  });
});
