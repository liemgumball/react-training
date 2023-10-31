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

    const inputElement = screen.getByPlaceholderText('Enter the email');

    expect(inputElement).toEqual(ref.current);
    expect(inputElement).toHaveFocus();

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

    const inputElement = screen.getByPlaceholderText('Enter the email');

    expect(inputElement).toEqual(ref.current);
    expect(inputElement).toHaveAttribute('aria-invalid');
    expect(inputElement).toHaveClass('border-red-500');
  });
});
