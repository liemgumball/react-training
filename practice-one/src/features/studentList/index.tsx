import List from '@components/List';
import StudentListItem from './components/StudentListItem';
import { getStudent } from './services/getStudent';
import { removeStudent } from './services/deleteStudent';

// constants
import { DATABASE_RESOURCES } from '@constants/services';
import { CONFIRM_MSG, ERROR_MSG } from '@constants/messages';
import { FormActionType } from '@constants/types';

type StudentListProps = {
  setFormAction: React.Dispatch<FormActionType>;
  keyword: string;
  updateStudentsTrigger: boolean;
  setUpdateStudentsTrigger: React.Dispatch<React.SetStateAction<boolean>>;
};

const StudentList = (props: StudentListProps) => {
  const {
    setFormAction,
    keyword,
    updateStudentsTrigger,
    setUpdateStudentsTrigger,
  } = props;

  const url = `${process.env.API_GATEWAY}/${DATABASE_RESOURCES.STUDENTS}?_sort=createdAt&_order=desc&q=${keyword}`;

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

        setFormAction({
          type: 'edit',
          data: await getStudent(dataId),
        });
      }

      if (btn && btn.classList.contains('remove-btn')) {
        if (window.confirm(CONFIRM_MSG.REMOVE_STUDENT)) {
          await removeStudent(dataId!);
          setUpdateStudentsTrigger((p) => !p); //trigger rerender List of students
        }
      }
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <List
      ItemComponent={StudentListItem}
      url={url}
      onClick={handleClick}
      updateTrigger={updateStudentsTrigger}
    ></List>
  );
};

export default StudentList;
