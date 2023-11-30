import { render, fireEvent } from '@testing-library/react';
import SortOption from './';
import * as ReactRouterDom from 'react-router-dom';

describe('SortOption', () => {
  it('renders SortOption component correctly', () => {
    const { getByText } = render(
      <ReactRouterDom.MemoryRouter>
        <SortOption value="asc">Ascending</SortOption>
      </ReactRouterDom.MemoryRouter>
    );

    const sortOptionElement = getByText('Ascending');
    expect(sortOptionElement).toBeInTheDocument();
  });

  it('applies "active" class when active prop is true', () => {
    const { container } = render(
      <ReactRouterDom.MemoryRouter>
        <SortOption value="asc" active>
          Ascending
        </SortOption>
      </ReactRouterDom.MemoryRouter>
    );

    const sortOptionElement = container.querySelector('.sort-option');
    expect(sortOptionElement).toHaveClass('active');
  });

  it('calls setSearchParams with the correct parameters on click', () => {
    const setSearchParamsMock = vi.fn();

    // Mock the useSearchParams hook with a mock function
    vi.spyOn(ReactRouterDom, 'useSearchParams').mockReturnValue([
      new URLSearchParams(),
      setSearchParamsMock,
    ]);

    const { getByText } = render(
      <SortOption value="asc">Ascending</SortOption>
    );
    const sortOptionElement = getByText('Ascending');
    fireEvent.click(sortOptionElement);

    expect(setSearchParamsMock).toHaveBeenCalledWith(expect.any(Function), {
      replace: true,
    });
  });
});
