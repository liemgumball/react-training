import { Profiler, startTransition, useMemo } from 'react';

// hooks
import useDebounce from '@hooks/useDebounce';
import useStudentForm from './hooks/useStudentForm';
import useStudentsQuery from './hooks/useStudentQuery';

//components
import Button from '@components/Button';
import List from '@components/List';
import SortMenu from '@components/SortMenu';
import SortOption from '@components/SortOption';
import StudentListItem from './components/StudentListItem';
import StudentForm from './components/StudentForm';
import { useSearchParams } from 'react-router-dom';

const StudentPage: React.FC = () => {
  // Student form reducer
  const [formState, dispatch] = useStudentForm();

  // Debounce the search query change
  const [searchParams] = useSearchParams({ q: '', sort: 'name' });

  const debouncedSearchQuery = useDebounce(searchParams.get('q') || '');
  const sortQuery = searchParams.get('sort') || '';

  // Get students
  const query = `?_sort=${sortQuery}&q=${debouncedSearchQuery}`;

  const { students, isError, error, isLoading } = useStudentsQuery({
    query: query,
  });

  /**
   * Profiler log information on rendering
   */
  const profilerRender = (id: string, phase: string, actualDuration: number) =>
    startTransition(() => {
      console.log(`Profiler [${id}] - ${phase} - ${actualDuration} ms`);
    });

  return (
    <Profiler id="student-page" onRender={profilerRender}>
      <article className="px-8 min-w-min">
        <header className="py-3 flex justify-between items-center bg-white border-b">
          <h1 className="text-3xl font-700">students list</h1>
          <span className="action-bar flex gap-5">
            <SortMenu>
              <SortOption value="name" active={sortQuery === 'name'}>
                name
              </SortOption>
              <SortOption value="email" active={sortQuery === 'email'}>
                email
              </SortOption>
              <SortOption value="createdAt" active={sortQuery === 'createdAt'}>
                date of admission
              </SortOption>
            </SortMenu>
            <Button
              className="uppercase"
              primary
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

          <List isError={isError} isLoading={isLoading} error={error as Error}>
            {useMemo(
              () =>
                students?.length ? (
                  students.map((item) => (
                    <StudentListItem
                      key={item.id}
                      student={item}
                      setStudentFormState={dispatch}
                    />
                  ))
                ) : (
                  <p className="text-custom-dark-gray text-center">not found</p>
                ),
              // eslint-disable-next-line react-hooks/exhaustive-deps
              [students?.length]
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
