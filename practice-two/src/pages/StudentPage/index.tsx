import { useContext } from 'react';
import { useQuery } from 'react-query';
import useDebounce from '@hooks/useDebounce';

import Button from '@components/Button';
import List from '@components/List';
import { DATABASE_RESOURCES } from '@constants/services';
import { SearchQueryContext } from '@contexts/SearchQuery';
import { getStudents } from './services/getStudents';
import StudentListItem from './StudentListItem';

const StudentPage = () => {
  const { searchQuery } = useContext(SearchQueryContext);
  // debounce the search query change
  const debouncedSearchQuery = useDebounce(searchQuery);

  const url = `${process.env.API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}?_sort=createdAt&_order=desc&q=${debouncedSearchQuery}`;

  const { data, isError, error, isLoading } = useQuery(
    ['students', debouncedSearchQuery],
    () => getStudents(url)
  );

  return (
    <article className="px-8 min-w-min">
      <header className="py-3 flex justify-between items-center bg-white border-b">
        <h1 className="text-3xl font-700">students list</h1>
        <Button className="uppercase" variant="primary">
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
        <List isError={isError} isLoading={isLoading} error={error as Error}>
          {data && data.length ? (
            data.map((item) => <StudentListItem key={item.id} data={item} />)
          ) : (
            <p className="text-custom-dark-gray text-center">not found</p>
          )}
        </List>
      </section>
    </article>
  );
};

export default StudentPage;
