import Button from '@components/Button';
import { StudentInputs, TStudent } from 'src/types';

import pen from '@assets/pen.svg';
import trash from '@assets/trash.svg';
import { formatDate } from '@services/format';
import useStudentRemoving from '@pages/StudentPage/hooks/useStudentRemoving';
import { CONFIRM_MSG } from '@constants/messages';
import { Dispatch } from 'react';
import { StudentFormAction } from '@pages/StudentPage/hooks/useStudentForm';
import api from '@services/apiRequest';
import { STUDENTS_URL } from '@constants/services';

type StudentListItemProps = {
  student: TStudent;
  setStudentFormState: Dispatch<StudentFormAction>;
};

const StudentListItem: React.FC<StudentListItemProps> = ({
  student,
  setStudentFormState,
}) => {
  const { avatar, createdAt, email, enrollNumber, id, name, phone } = student;

  const { removeStudent } = useStudentRemoving();

  const onClickRemove = () => {
    if (window.confirm(CONFIRM_MSG.REMOVE_STUDENT)) removeStudent(id);
  };

  const onClickEdit = async () => {
    setStudentFormState({
      status: 'editing',
      student: (await api.get(STUDENTS_URL + '/' + id)) as StudentInputs,
    });
  };

  return (
    <li data-id={id} className="student-list-item relative group">
      <div>
        <img src={avatar} alt="student avatar" width={60} height={60} />
      </div>
      <p className="truncate">{name}</p>
      <p className="truncate normal-case">{email}</p>
      <p className="truncate">{phone}</p>
      <p className="truncate">{enrollNumber}</p>
      <p className="truncate">
        {/* format createdAt dateString */}
        {formatDate(createdAt)}
      </p>
      <div className="flex gap-x-2 justify-end">
        <Button
          className="btn-remove group-hover:hover:bg-white group-hover:bg-custom-light-pink"
          onClick={onClickRemove}
        >
          <img src={trash} alt="trash" />
        </Button>
        <Button
          className="btn-edit group-hover:hover:bg-white group-hover:bg-custom-light-pink"
          onClick={onClickEdit}
        >
          <img src={pen} alt="pen" />
        </Button>
      </div>
    </li>
  );
};

export default StudentListItem;
