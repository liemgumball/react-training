import { useMutation, useQueryClient } from 'react-query';
import api from '@services/apiRequest';
import { STUDENTS_URL } from '@constants/services';
import { TStudent } from 'src/types';

const useStudentRemoving = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, mutate } = useMutation({
    mutationFn: async (id: string | number) =>
      (await api.remove(STUDENTS_URL + '/' + id)) as TStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] }); // invalidate & refetch on mutation success
    },
  });

  return { removeStudentAsync: mutateAsync, removeStudent: mutate };
};

export default useStudentRemoving;
