import { fireEvent, render } from '@testing-library/react';
import List from '.';

describe('List component', () => {
  it('render without crashing', () => {
    render(<List />);
  });

  it('should render error message', () => {
    const { getByRole } = render(
      <List isError isLoading error={new Error('Error of list')} />
    );

    expect(getByRole('alert')).toHaveClass('text-red-500');
    expect(getByRole('alert')).toHaveTextContent('Error of list');
  });

  it('should render loading message', () => {
    const { getByText } = render(
      <List isLoading>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </List>
    );

    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('should render data and handle click', () => {
    const mockOnClick = vi.fn();
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const { container } = render(
      <List onClick={mockOnClick}>
        {data.map((item, index) => (
          <li key={index}>{item.toString()}</li>
        ))}
      </List>
    );

    const listItems = container.querySelector('ul');

    if (listItems) {
      fireEvent.click(listItems);
      expect(mockOnClick).toBeCalledTimes(1); // Click handler was called
    }
  });
});
