import { renderHook, act } from '@testing-library/react';
import useStudentForm from './';
import { StudentInputs } from '@utils/types';

describe('useStudentForm', () => {
  it('should initialize with closed status', () => {
    const { result } = renderHook(() => useStudentForm());

    const [state] = result.current;

    expect(state.status).toBe('closed');
  });

  it('should update status to adding', () => {
    const { result } = renderHook(() => useStudentForm());

    act(() => {
      const [, setState] = result.current;
      setState({ status: 'adding' });
    });

    const [state] = result.current;

    expect(state.status).toBe('adding');
  });

  it('should update status to editing with a student', () => {
    const { result } = renderHook(() => useStudentForm());

    const studentData: StudentInputs = {
      id: 0,
      name: 'Admin0',
      email: 'admin0@example.com',
      phone: '0905000000',
      enrollNumber: 123456789,
    };

    act(() => {
      const [, setState] = result.current;
      setState({ status: 'editing', student: studentData });
    });

    const [state] = result.current;

    expect(state.status).toBe('editing');
    if (state.status === 'editing') expect(state.student).toEqual(studentData);
  });
});
