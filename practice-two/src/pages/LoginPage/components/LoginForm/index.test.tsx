import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import LoginForm from '.';

describe('Login Form', () => {
  test('should render login form and validate submission', async () => {
    render(<LoginForm />);

    // Check that the form exists
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();

    // check auto focus
    expect(screen.getByLabelText('email')).toHaveFocus();

    const submitButton = screen.getByRole('button');

    // Submit the form (click the submit button)
    act(() => {
      fireEvent.click(submitButton);
    });

    // Wait for the validation error message to appear
    await waitFor(() => {
      // Check if the submit button is disabled
      expect(submitButton).toBeDisabled();
      expect(screen.getAllByRole('alert')[0]).toHaveClass('text-red-500');
    });
  });

  test('should render a submittable form', async () => {
    render(<LoginForm />);

    // Find form elements
    const emailField = screen.getByLabelText('email');
    const passwordField = screen.getByLabelText('password');
    const submitButton = screen.getByRole('button');

    act(() => {
      // submit the form first
      fireEvent.click(submitButton);
      // change to valid input values
      fireEvent.change(emailField, { target: { value: 'admin0@mail.com' } });
      fireEvent.change(passwordField, { target: { value: 'Admin0@' } });
    });

    await waitFor(() => {
      // Check if the submit button is disabled
      expect(submitButton).not.toBeDisabled();
    });
  });
});
