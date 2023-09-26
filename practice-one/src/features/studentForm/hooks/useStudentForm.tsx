import { useReducer } from 'react';
import { TStudent } from '@features/studentList/components/StudentListItem';

export type FormActionType = {
  type: 'add' | 'edit' | 'close';
  data?: TStudent;
};

export type StudentFormDataType = Pick<
  TStudent,
  'name' | 'email' | 'phone' | 'enrollNumber'
> & { id?: number };

export type StudentFormStates = {
  show: boolean;
  title?: string;
  data?: StudentFormDataType;
};

function reducer(
  state: StudentFormStates,
  action: FormActionType
): StudentFormStates {
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
}

const useStudentForm = () => {
  const [formState, formAction] = useReducer(reducer, {
    show: false,
  });

  return [formState, formAction] as const;
};

export default useStudentForm;
