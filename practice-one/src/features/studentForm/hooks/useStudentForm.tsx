import { useReducer } from 'react';
import { FormActionType, StudentFormStates } from '@utils/types';

/**
 * Reducer function to manage the state of the student form.
 * Optimizes performance by updating multiple sub-values of the complex state.
 *
 * @param state - Current state of the form
 * @param action - Dispatched action for the reducer
 * @returns Updated state of the form
 */
const reducer = (
  state: StudentFormStates,
  action: FormActionType
): StudentFormStates => {
  const studentFormData = action.data;

  switch (action.type) {
    case 'add':
      return { show: true, title: 'add student' };

    case 'edit':
      if (!studentFormData) return state;

      return {
        show: true,
        title: 'edit student',
        data: {
          id: studentFormData.id,
          email: studentFormData.email,
          name: studentFormData.name,
          phone: studentFormData.phone,
          enrollNumber: studentFormData.enrollNumber,
        },
      };

    case 'close':
      return { show: false };

    default:
      return state;
  }
};

/**
 * A custom hook that creates a reducer action for managing the student form state.
 *
 * @returns An array containing the form state and form action dispatcher
 */
const useStudentForm = () => {
  const [formState, formAction] = useReducer(reducer, {
    show: false,
  });

  return [formState, formAction] as const;
};

export default useStudentForm;
