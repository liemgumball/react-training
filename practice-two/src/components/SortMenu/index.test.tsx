import { vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import SortMenu from '.';

describe('SortMenu component', () => {
  it('toggles the dropdown menu on mouse enter and leaves on mouse leave', () => {
    const { getByRole } = render(
      <SortMenu icon="icon.png">Menu content</SortMenu>
    );

    const btn = getByRole('button');
    const menu = getByRole('list');

    // Initially, the dropdown menu should be invisible
    expect(menu).toHaveClass('invisible');

    // Mouse enters the container
    fireEvent.mouseEnter(btn);

    // Dropdown menu should now be visible
    expect(menu).not.toHaveClass('invisible');

    // Mouse leaves the container
    fireEvent.mouseLeave(btn);

    // Dropdown menu should be invisible again
    expect(menu).toHaveClass('invisible');
  });

  it('calls the onClick callback when the dropdown menu is clicked', () => {
    const mockOnClick = vi.fn();

    const { getByText } = render(
      <SortMenu icon="icon.png" onClick={mockOnClick}>
        Menu content
      </SortMenu>
    );

    fireEvent.click(getByText('Menu content'));

    // Verify that the onClick callback is called
    expect(mockOnClick).toHaveBeenCalled();
  });
});
