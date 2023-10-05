import { useState } from 'react';
import StudentForm from '@features/studentForm';
import useDebounce from '@hooks/useDebounce';
import useStudentForm from '@features/studentForm/hooks/useStudentForm';
import Button from '@components/Button';
import List from '@features/list';
import { DATABASE_RESOURCES } from '@constants/services';
import StudentListItem from '@features/list/components/StudentListItem';
import { CONFIRM_MSG, ERROR_MSG } from '@constants/messages';
import { getStudent } from '@features/list/services/getStudent';
import { removeStudent } from '@features/list/services/deleteStudent';
import { TStudent } from '@utils/types';

type StudentPageProps = {
  searchText: string;
};

const StudentPage = ({ searchText }: StudentPageProps) => {
  const [formState, setFormAction] = useStudentForm();

  const [updatedStudents, setUpdatedStudents] = useState<boolean>(false); // use to trigger update List of students

  const keyword = useDebounce(searchText); // used for Search in list

  const url = `${process.env.API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}?_sort=createdAt&_order=desc&q=${keyword}`;

  /**
   * Handle if user clicked on remove button or edit button
   * @param e mouse event
   */
  const handleClick = async (e: React.MouseEvent<HTMLUListElement>) => {
    try {
      const dataId = (e.target as HTMLElement)
        .closest('li')
        ?.getAttribute('data-id');

      const btn = (e.target as HTMLUListElement).closest('button');

      if (btn && btn.classList.contains('edit-btn')) {
        if (!dataId) {
          throw new Error(ERROR_MSG.MISSING_ID);
        }
        // popup form edit
        setFormAction({
          type: 'edit',
          data: await getStudent(dataId),
        });
      }

      if (btn && btn.classList.contains('remove-btn')) {
        // show alert confirm message
        if (window.confirm(CONFIRM_MSG.REMOVE_STUDENT)) {
          await removeStudent(dataId!);
          setUpdatedStudents((p) => !p); //trigger update List of students
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
            type="button"
            className="text-white uppercase"
            primary
            onClick={() => setFormAction({ type: 'add' })}
          >
            add new student
          </Button>
        </header>
        <hr />
        <section className="students py-3">
          <header className="list-heading grid text-custom-medium-gray font-600 whitespace-nowrap">
            <span />
            <span>name</span>
            <span>email</span>
            <span>phone</span>
            <span>enroll number</span>
            <span>date of admission</span>
            <span />
          </header>
          <List<TStudent>
            url={url}
            ItemComponent={StudentListItem}
            updateTrigger={updatedStudents}
            onClick={handleClick}
          />
        </section>
      </article>
      <div
        className={`${
          formState.show ? '' : 'invisible'
        } fixed inset-0 flex-center`}
      >
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => setFormAction({ type: 'close' })}
        ></div>
        <StudentForm
          title={formState.title}
          data={formState.data}
          setFormAction={setFormAction}
          setUpdateStudents={setUpdatedStudents}
        />
      </div>
    </>
  );
};
StudentPage.whyDidYouRender = true;
export default StudentPage;
