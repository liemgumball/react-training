import { useState } from 'react';
import StudentList from '@features/studentList';
import StudentForm from '@features/studentForm';
import useDebounce from '@hooks/useDebounce';
import useStudentForm from '@features/studentForm/hooks/useStudentForm';
import Button from '@components/Button';

type StudentPageProps = {
  searchText: string;
};

const StudentPage = ({ searchText }: StudentPageProps) => {
  const [formState, formAction] = useStudentForm();

  const [updatedStudents, setUpdatedStudents] = useState<boolean>(false);

  const keyword = useDebounce(searchText);

  return (
    <>
      <article className="px-8 min-w-min">
        <header className="py-3 flex justify-between items-center bg-white border-b">
          <h1 className="text-3xl font-700">students list</h1>
          <Button
            type="button"
            className="text-white bg-custom-yellow uppercase"
            onClick={(e) => {
              e.preventDefault();
              formAction({ type: 'add' });
            }}
          >
            add new student
          </Button>
        </header>
        <hr />
        <section className="students py-3 whitespace-no-wrap">
          <header className="list-heading grid text-custom-medium-gray font-600 truncate">
            <span />
            <span>name</span>
            <span>email</span>
            <span>phone</span>
            <span>enroll number</span>
            <span>date of admission</span>
            <span />
          </header>
          <StudentList
            keyword={keyword}
            setFormAction={formAction}
            updateStudentsTrigger={updatedStudents}
            setUpdateStudentsTrigger={setUpdatedStudents}
          ></StudentList>
        </section>
      </article>
      <div
        className={`${
          formState.show ? '' : 'invisible'
        } fixed inset-0 flex-center`}
      >
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => formAction({ type: 'close' })}
        ></div>
        <StudentForm
          title={formState.title}
          data={formState.data}
          setFormAction={formAction}
          setUpdateStudents={setUpdatedStudents}
        />
      </div>
    </>
  );
};

export default StudentPage;
