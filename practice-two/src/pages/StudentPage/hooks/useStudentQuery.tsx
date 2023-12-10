import { STUDENTS_URL } from '@constants/services';
import api from '@services/api-request';
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { TStudent } from 'src/types';

type StudentQueryOptions = {
  query: string;
};

const useStudentsQuery = (options: StudentQueryOptions) => {
  const { query } = options;

  const {
    data: students,
    isError,
    error,
    isLoading,
  } = useQuery<TStudent[], Error>(
    ['students', useMemo(() => query, [query])],
    async () => (await api.get(STUDENTS_URL + query)) as TStudent[]
  );

  return { students, isError, error, isLoading };
};

export default useStudentsQuery;
