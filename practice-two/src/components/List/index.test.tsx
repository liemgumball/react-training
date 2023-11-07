import { act, render, screen } from '@testing-library/react';
import List from '.';

describe('List component', () => {
  it('should render error message', () => {
    render(<List isError isLoading error={new Error('Error of list')} />);

    expect(screen.getByRole('alert')).toHaveTextContent('Error of list');
    expect(screen.getByRole('alert')).toHaveClass('text-red-500');
  });

  it('should render loading message', () => {
    render(
      <List isLoading>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </List>
    );

    expect(screen.getByText('Loading...')).toHaveClass('text-custom-gray');
  });

  it('should render data and handle click', () => {
    let counter = 0;
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    render(
      <List onClick={() => counter++}>
        {data.map((item, index) => (
          <li key={index}>{item.toString()}</li>
        ))}
      </List>
    );

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(10);

    act(() => {
      listItems[0].click(); // Click the first list item
    });

    expect(counter).toEqual(1); // Click handler was called once
  });
});
