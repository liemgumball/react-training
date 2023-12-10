import Button from '@components/Button';
import { StudentInputs, TStudent } from 'src/types';

import pen from '@assets/pen.svg';
import trash from '@assets/trash.svg';
import { formatDate } from '@services/format';
import useStudentRemoving from '@pages/StudentPage/hooks/useStudentRemoving';
import { CONFIRM_MSG } from '@constants/messages';
import { Dispatch, useState } from 'react';
import { StudentFormAction } from '@pages/StudentPage/hooks/useStudentForm';
import api from '@services/api-request';
import { STUDENTS_URL } from '@constants/services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

type StudentListItemProps = {
  student: TStudent;
  setStudentFormState: Dispatch<StudentFormAction>;
};

const StudentListItem: React.FC<StudentListItemProps> = ({
  student,
  setStudentFormState,
}) => {
  const { avatar, createdAt, email, enrollNumber, id, name, phone } = student;

  const [isFetching, setIsFetching] = useState(false);

  const { removeStudent } = useStudentRemoving();

  const onClickRemove = () => {
    if (window.confirm(CONFIRM_MSG.REMOVE_STUDENT)) removeStudent(id);
  };

  const onClickEdit = async () => {
    setIsFetching(true);

    const student = (await api.get(STUDENTS_URL + '/' + id)) as StudentInputs;
    if (student) setIsFetching(false);

    setStudentFormState({
      status: 'editing',
      student: student,
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
          style={{ height: '45px' }}
        >
          <img src={trash} alt="trash" />
        </Button>
        <Button
          className="btn-edit group-hover:hover:bg-white group-hover:bg-custom-light-pink"
          onClick={onClickEdit}
          style={{ height: '45px' }}
        >
          {isFetching ? (
            <FontAwesomeIcon
              icon={faSpinner}
              spinPulse
              className="text-custom-yellow"
              height={14}
              width={19}
            />
          ) : (
            <img src={pen} alt="pen" />
          )}
        </Button>
      </div>
    </li>
  );
};

StudentListItem.whyDidYouRender = true;

export default StudentListItem;
