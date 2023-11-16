import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import useDebounce from '.';

describe('useDebounce', () => {
  it('should debounce the value', async () => {
    const TestComponent: React.FC<{
      value: number | (() => number);
      delay: number;
    }> = ({ value, delay }) => {
      const debouncedValue = useDebounce(value, delay);
      return <div data-testid="debounced-value">{debouncedValue}</div>;
    };

    const { rerender } = render(<TestComponent value={0} delay={500} />);
    const debouncedValueElement = screen.getByTestId('debounced-value');

    expect(debouncedValueElement).toHaveTextContent('0');

    // Trigger a re-render with a new value from a function
    act(() => {
      rerender(<TestComponent value={() => 1} delay={500} />);
    });

    // The value should not have changed immediately
    expect(debouncedValueElement).toHaveTextContent('0');

    // Wait for the delay to pass
    await waitFor(() => {
      expect(debouncedValueElement).toHaveTextContent('1');
    });
  });
});
