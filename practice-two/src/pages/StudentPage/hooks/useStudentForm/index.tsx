import { StudentInputs } from '@utils/types';
import { useState } from 'react';

export type StudentFormState =
  | {
      status: 'closed' | 'adding';
    }
  | { status: 'editing'; student: StudentInputs };

const useStudentForm = () => {
  const [state, setState] = useState<StudentFormState>({ status: 'closed' });

  return [state, setState] as const;
};

export default useStudentForm;
