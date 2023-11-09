import { MouseEvent, useContext } from 'react';
import { useQuery } from 'react-query';
import useDebounce from '@hooks/useDebounce';

import Button from '@components/Button';
import List from '@components/List';
import { DATABASE_RESOURCES } from '@constants/services';
import { SearchQueryContext } from '@contexts/SearchQuery';
import { getStudents } from './services/getStudents';
import StudentListItem from './components/StudentListItem';
import StudentForm from './components/StudentForm';
import { CONFIRM_MSG, ERROR_MSG } from '@constants/messages';
import useStudentForm from './hooks/useStudentForm';
import { getStudentById } from './services/getStudentById';
import { StudentInputs } from '@utils/types';

const StudentPage: React.FC = () => {
  // Debounce the search query change
  const { searchQuery } = useContext(SearchQueryContext);
  const debouncedSearchQuery = useDebounce(searchQuery);

  // Get students
  const url = `${process.env.API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}?_sort=createdAt&_order=desc&q=${debouncedSearchQuery}`;
  const { data, isError, error, isLoading } = useQuery(
    ['students', debouncedSearchQuery],
    () => getStudents(url)
  );

  // Student form reducer
  const [formState, setFormState] = useStudentForm();
  /**
   * Delegated onClick handle (edit || remove)
   * @param event mouse event
   */
  const onClick = async (event: MouseEvent) => {
    try {
      const dataId = (event.target as HTMLElement)
        .closest('li')
        ?.getAttribute('data-id');
      const btn = (event.target as HTMLUListElement).closest('button');

      if (btn && btn.classList.contains('btn-edit')) {
        if (dataId) {
          setFormState({
            status: 'editing',
            student: (await getStudentById(dataId)) as StudentInputs,
          });
        } else {
          throw new Error(ERROR_MSG.MISSING_ID);
        }
      }

      if (btn && btn.classList.contains('btn-remove')) {
        // show alert confirm message
        if (window.confirm(CONFIRM_MSG.REMOVE_STUDENT)) {
          console.log('confirm remove');
        }
      }
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <>
      <article className="px-8 min-w-min">
        <header className="py-3 flex justify-between items-center bg-white border-b">
          <h1 className="text-3xl font-700">students list</h1>
          <Button
            className="uppercase"
            variant="primary"
            onClick={() => setFormState({ status: 'adding' })}
          >
            add new student
          </Button>
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
            onClick={onClick}
          >
            {data && data.length ? (
              data.map((item) => <StudentListItem key={item.id} data={item} />)
            ) : (
              <p className="text-custom-dark-gray text-center">not found</p>
            )}
          </List>
        </section>
      </article>
      {formState.status !== 'closed' && (
        <StudentForm
          setFormState={setFormState}
          state={formState.status}
          student={
            formState.status === 'editing' ? formState.student : undefined
          }
        />
      )}
    </>
  );
};

StudentPage.whyDidYouRender = true;

export default StudentPage;
