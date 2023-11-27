import { fireEvent, render, waitFor } from '@testing-library/react';
import StudentForm from '.';
import { act } from 'react-dom/test-utils';
import { QueryClient, QueryClientProvider } from 'react-query';
import api from '@services/apiRequest';
import { STUDENTS_URL } from '@constants/services';

// Create a QueryClient instance for testing
const queryClient = new QueryClient();

// Mock the apiRequest module
vi.mock('@services/apiRequest');

const mockResponse = {
  createdAt: new Date().toISOString(),
  name: 'test user',
  avatar: 'https://loremflickr.com/60/60',
  email: 'test@example.com',
  phone: '0912345678',
  enrollNumber: 123456789,
  id: 1,
};

describe('student form component', () => {
  const mockApiPost = vi.spyOn(api, 'post');
  const mockApiPatch = vi.spyOn(api, 'patch');

  beforeEach(() => {
    // Clear mock calls before each test
    vi.clearAllMocks();
  });

  it('should render the form', async () => {
    const { getByLabelText, getByRole, getAllByRole } = render(
      <QueryClientProvider client={queryClient}>
        <StudentForm title="add" setFormState={() => {}} />
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
    await waitFor(
      () => {
        // Check if the submit button is disabled
        expect(submitButton).toBeDisabled();
        // Check if the error message should be shown
        expect(getAllByRole('alert')[0]).toHaveClass('text-red-500');
      },
      { timeout: 10000 }
    );
  });

  it('should render a valid form & submit add', async () => {
    const { getByLabelText, getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <StudentForm title="add" setFormState={() => {}} />
      </QueryClientProvider>
    );

    // Get elements
    const nameField = getByLabelText('Name');
    const emailField = getByLabelText('Email');
    const phoneField = getByLabelText('Phone number');
    const enrollNumberField = getByLabelText('Enroll number');
    const submitButton = getByRole('button');

    // submit the form first
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(submitButton).not.toHaveTextContent('submitting...');
    });

    // change to valid input values
    fireEvent.change(nameField, { target: { value: mockResponse.name } });
    fireEvent.change(emailField, { target: { value: mockResponse.email } });
    fireEvent.change(phoneField, { target: { value: mockResponse.phone } });
    fireEvent.change(enrollNumberField, {
      target: { value: mockResponse.enrollNumber },
    });

    // additional assertions for form fields
    expect(nameField).toHaveValue('test user');
    expect(emailField).toHaveValue('test@example.com');
    expect(phoneField).toHaveValue('0912345678');
    expect(enrollNumberField).toHaveValue(123456789);

    await waitFor(() => {
      expect(submitButton).not.toBeDisabled();
      fireEvent.click(submitButton);
    });

    // Omit 'createdAt', 'avatar', and 'id' properties
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { createdAt, avatar, id, enrollNumber, ...rest } = mockResponse;

    expect(mockApiPost).toHaveBeenCalledWith(STUDENTS_URL, {
      enrollNumber: enrollNumber.toString(),
      ...rest,
    });
  });

  it('should render a valid form & submit edit', async () => {
    const { getByRole } = render(
      <QueryClientProvider client={queryClient}>
        <StudentForm
          title="edit"
          student={mockResponse}
          setFormState={() => {}}
        />
      </QueryClientProvider>
    );

    const submitBtn = getByRole('button');

    await waitFor(() => {
      fireEvent.click(submitBtn);
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { createdAt, avatar, id, enrollNumber, ...rest } = mockResponse;

    expect(mockApiPatch).toHaveBeenCalledWith(STUDENTS_URL + '/' + id, {
      enrollNumber: enrollNumber.toString(),
      id: id,
      ...rest,
    });
  });
});
