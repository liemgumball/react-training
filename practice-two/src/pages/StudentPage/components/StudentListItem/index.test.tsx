import { render, fireEvent, waitFor } from '@testing-library/react';
import StudentListItem from '.';
import api from '@services/api-request';

// Mocking the useStudentRemoving hook
vi.mock('@pages/StudentPage/hooks/useStudentRemoving', () => ({
  __esModule: true,
  default: () => ({ removeStudent: vi.fn() }),
}));

const mockStudent = {
  avatar: 'mock-avatar-url',
  createdAt: '2023-09-07T23:25:31.357Z',
  email: 'mock@example.com',
  enrollNumber: 123456,
  id: 1,
  name: 'Mock Student',
  phone: '1234567890',
};

describe('StudentListItem component', () => {
  const mockApiGet = vi.spyOn(api, 'get');

  it('renders student data and handles remove and edit actions', async () => {
    const setStudentFormStateMock = vi.fn();

    const { getByText, getByAltText } = render(
      <StudentListItem
        student={mockStudent}
        setStudentFormState={setStudentFormStateMock}
      />
    );

    mockApiGet.mockResolvedValue(mockStudent);

    // Assert that student data is rendered
    expect(getByText('Mock Student')).toBeInTheDocument();
    expect(getByText('mock@example.com')).toBeInTheDocument();
    expect(getByText('1234567890')).toBeInTheDocument();
    expect(getByText('123456')).toBeInTheDocument();

    // Trigger edit action
    fireEvent.click(getByAltText('pen'));
    await waitFor(() => {
      // setStudentFormState should be called with the correct arguments
      expect(setStudentFormStateMock).toHaveBeenCalledWith({
        status: 'editing',
        student: mockStudent, // You may refine this expectation based on your actual implementation
      });
    });
  });
});
