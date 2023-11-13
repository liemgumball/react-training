import { useReducer } from 'react';
import { StudentInputs } from '@utils/types';

export type StudentFormState =
  | {
      shown: true;
      title: 'add';
    }
  | {
      shown: true;
      title: 'edit';
      student: StudentInputs;
    }
  | { shown: false };

export type StudentFormAction =
  | { status: 'adding' | 'closed' }
  | {
      status: 'editing';
      student: StudentInputs;
    };

/**
 * Reducer function to manage the state of the student form.
 * Optimizes performance by updating multiple sub-values of the complex state.
 *
 * @param state - Current state of the form
 * @param action - Dispatched action for the reducer
 * @returns Updated state of the form
 */
const reducer = (
  state: StudentFormState,
  action: StudentFormAction
): StudentFormState => {
  switch (action.status) {
    case 'adding':
      return { shown: true, title: 'add' };

    case 'editing':
      return {
        shown: true,
        title: 'edit',
        student: action.student,
      };

    case 'closed':
      return { shown: false };

    default:
      return state;
  }
};

const useStudentForm = () => {
  const [formState, dispatch] = useReducer(reducer, {
    shown: false,
  });

  return [formState, dispatch] as const;
};

export default useStudentForm;
