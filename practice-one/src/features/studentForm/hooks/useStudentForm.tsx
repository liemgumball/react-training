import { useReducer } from 'react';
import { FormActionType, StudentFormStates } from '@constants/types';

/**
 * invoked multiples sub-values of complex state to optimize performance for component
 * @param state of the form
 * @param action dispatch action for reducer
 * @returns state of the form
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
 * a custom hook create a reducer action for student form
 */
const useStudentForm = () => {
  const [formState, formAction] = useReducer(reducer, {
    show: false,
  });

  return [formState, formAction] as const;
};

export default useStudentForm;
