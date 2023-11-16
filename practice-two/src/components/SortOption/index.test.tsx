import { render } from '@testing-library/react';
import SortOption from '.';

describe('SortOption component', () => {
  it('renders with active class when active prop is true', () => {
    const { container } = render(
      <SortOption value="option1" active>
        Option 1
      </SortOption>
    );
    expect(container.firstChild).toHaveClass('active');
  });

  it('does not render active class when active prop is false', () => {
    const { container } = render(
      <SortOption value="option1" active={false}>
        Option 1
      </SortOption>
    );
    expect(container.firstChild).not.toHaveClass('active');
  });

  it('renders the correct value prop', () => {
    const { getByText } = render(
      <SortOption value="option1">Option 1</SortOption>
    );
    expect(getByText('Option 1')).toHaveAttribute('value', 'option1');
  });
});
