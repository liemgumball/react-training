import { fireEvent, render, waitFor } from '@testing-library/react';
import StudentForm from '.';
import { act } from 'react-dom/test-utils';
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a QueryClient instance for testing
const queryClient = new QueryClient();

describe('student form component', () => {
  it('should render the form', async () => {
    const { getByLabelText, getByRole, getAllByRole } = render(
      <QueryClientProvider client={queryClient}>
        <StudentForm state="add" setShowForm={() => {}} />
      </QueryClientProvider>
    );

    // check heading
    expect(getByRole('heading')).toHaveTextContent('add student');
    // Check auto focus
    expect(getByLabelText('Name')).toHaveFocus();

    const submitButton = getByRole('button');

    // Submit the form (click the submit button)
    act(() => {
      fireEvent.click(submitButton);
    });

    // Wait for the validation error message to appear
    await waitFor(() => {
      // Check if the submit button is disabled
      expect(submitButton).toBeDisabled();
      // Check if the error message should be shown
      expect(getAllByRole('alert')[0]).toHaveClass('text-red-500');
    });
  });

  it('should render a valid form', async () => {
    const { getByLabelText, getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <StudentForm state="add" setShowForm={() => {}} />
      </QueryClientProvider>
    );

    // Get elements
    const nameField = getByLabelText('Name');
    const emailField = getByLabelText('Email');
    const phoneField = getByLabelText('Phone number');
    const enrollNumberField = getByLabelText('Enroll number');
    const submitButton = getByRole('button');

    act(() => {
      // submit the form first
      fireEvent.click(submitButton);
      // change to valid input values
      fireEvent.change(nameField, { target: { value: 'Admin0' } });
      fireEvent.change(emailField, { target: { value: 'admin0@mail.com' } });
      fireEvent.change(phoneField, { target: { value: '0905000000' } });
      fireEvent.change(enrollNumberField, { target: { value: '123456789' } });
    });

    await waitFor(() => {
      // Check if the submit button is disabled
      expect(submitButton).not.toBeDisabled();
    });
  });
});
