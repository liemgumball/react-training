import { act, render, screen } from '@testing-library/react';
import Input from '.';
import { createRef } from 'react';

describe('Input Component', () => {
  const ref = createRef<HTMLInputElement>();

  it('should render a focused input with placeholder', () => {
    render(
      <Input
        autoFocus
        placeholder="Enter the email"
        defaultValue="OK"
        ref={ref}
      />
    );

    expect(screen.getByPlaceholderText('Enter the email')).toEqual(ref.current);
    expect(screen.getByPlaceholderText('Enter the email')).toHaveFocus();

    act(() => {
      screen.getByPlaceholderText('Enter the email').blur();
    });

    expect(screen.getByPlaceholderText('Enter the email')).not.toHaveFocus();
  });

  it('should render an invalid input', () => {
    render(
      <Input
        placeholder="Enter the email"
        defaultValue="OK"
        ref={ref}
        inValid
      />
    );

    expect(screen.getByPlaceholderText('Enter the email')).toEqual(ref.current);
    expect(screen.getByPlaceholderText('Enter the email')).toHaveAttribute(
      'aria-invalid'
    );
    expect(screen.getByPlaceholderText('Enter the email')).toHaveClass(
      'border-red-500'
    );
  });
});
