import { MouseEvent, Profiler, useCallback, useContext, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

// hooks
import useDebounce from '@hooks/useDebounce';
import useStudentForm from './hooks/useStudentForm';

//context & constants
import { SearchQueryContext } from '@contexts/SearchQuery';
import { StudentInputs, TStudent } from '@utils/types';
import { DATABASE_RESOURCES } from '@constants/services';
import { CONFIRM_MSG, ERROR_MSG } from '@constants/messages';
import api from '@services/apiRequest';

//components
import Button from '@components/Button';
import List from '@components/List';
import SortMenu from '@components/SortMenu';
import SortOption from '@components/SortOption';
import StudentListItem from './components/StudentListItem';
import StudentForm from './components/StudentForm';

const StudentPage: React.FC = () => {
  // Student form reducer
  const [formState, dispatch] = useStudentForm();

  // Debounce the search query change
  const { searchQuery } = useContext(SearchQueryContext);
  const debouncedSearchQuery = useDebounce(searchQuery);

  // Sort field
  const [sortBy, setSortBy] = useState('name');

  // Get students
  const url = `${process.env.API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}`;
  const query = `?_sort=${sortBy}&_order=asc&q=${debouncedSearchQuery}`;

  const { data, isError, error, isLoading } = useQuery(
    ['students', debouncedSearchQuery, sortBy],
    async () => (await api.get(url + query)) as TStudent[]
  );

  // Mutations
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: (id: string) => api.remove(url + '/' + id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] }); // invalidate & refetch on mutation success
    },
  });

  /**
   * Profiler on rendering
   * @param id of Profiler
   * @param phase of render (mount | update)
   * @param actualDuration
   * @param baseDuration
   * @param startTime
   * @param commitTime
   * @param interactions
   */
  const profilerRender = (
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interactions: any
  ) => {
    console.log({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    });
  };

  /**
   * Delegated list onClick handle (edit || remove)
   * @param event mouse event
   */
  const listOnClick = useCallback(
    async (event: MouseEvent) => {
      try {
        const dataId = (event.target as HTMLElement)
          .closest('li')
          ?.getAttribute('data-id');
        const btn = (event.target as HTMLUListElement).closest('button');

        if (dataId) {
          if (btn && btn.classList.contains('btn-edit')) {
            dispatch({
              status: 'editing',
              student: (await api.get(url + '/' + dataId)) as StudentInputs,
            });
          }

          if (btn && btn.classList.contains('btn-remove')) {
            // show alert confirm message
            if (window.confirm(CONFIRM_MSG.REMOVE_STUDENT)) {
              await mutateAsync(dataId); // remove and refetch the students
            }
          }
        } else {
          throw new Error(ERROR_MSG.MISSING_ID);
        }
      } catch (err) {
        alert((err as Error).message);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url]
  );

  /**
   * Delegated onClick to select sort option
   * @param event Mouse event
   */
  const dropDownMenuOnClick = (event: React.MouseEvent) => {
    try {
      const value = (event.target as HTMLElement)
        .closest('li')
        ?.getAttribute('value');

      if (value) {
        setSortBy(value);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Profiler id="student-page" onRender={profilerRender}>
      <article className="px-8 min-w-min">
        <header className="py-3 flex justify-between items-center bg-white border-b">
          <h1 className="text-3xl font-700">students list</h1>
          <span className="action-bar flex gap-5">
            <SortMenu onClick={dropDownMenuOnClick}>
              <SortOption value="name" active={sortBy === 'name'}>
                name
              </SortOption>
              <SortOption value="email" active={sortBy === 'email'}>
                email
              </SortOption>
              <SortOption value="createdAt" active={sortBy === 'createdAt'}>
                date of admission
              </SortOption>
            </SortMenu>
            <Button
              className="uppercase"
              variant="primary"
              onClick={() => dispatch({ status: 'adding' })}
            >
              add new student
            </Button>
          </span>
        </header>
        <hr />
        <section className="students py-3">
          <header className="student-list-heading grid text-custom-medium-gray font-600 whitespace-nowrap">
            <span />
            <span>name</span>
            <span>email</span>
            <span>phone</span>
            <span>enroll number</span>
            <span>date of admission</span>
            <span />
          </header>
          <List
            isError={isError}
            isLoading={isLoading}
            error={error as Error}
            onClick={listOnClick}
          >
            {data && data.length ? (
              data.map((item) => <StudentListItem key={item.id} data={item} />)
            ) : (
              <p className="text-custom-dark-gray text-center">not found</p>
            )}
          </List>
        </section>
      </article>
      {formState.shown && (
        <StudentForm
          setFormState={dispatch}
          title={formState.title}
          student={formState.title === 'edit' ? formState.student : undefined}
        />
      )}
    </Profiler>
  );
};

StudentPage.whyDidYouRender = true;

export default StudentPage;
