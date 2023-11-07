import Button from '@components/Button';
import { TStudent } from '@utils/types';

import pen from '@assets/pen.svg';
import trash from '@assets/trash.svg';

type StudentListItemProps = {
  data: TStudent;
  isFetching?: boolean;
};

const StudentListItem: React.FC<StudentListItemProps> = ({
  data,
  isFetching,
}) => {
  const { avatar, createdAt, email, enrollNumber, id, name, phone } = data;

  return (
    <li
      data-id={id}
      className={`student-list-item relative ${isFetching ? 'opacity-50' : ''}`}
    >
      {/* prevent onClick if fetching */}
      {isFetching && <div className="absolute inset-0 z-50"></div>}

      <div>
        <img src={avatar} alt="student avatar" width={60} height={60} />
      </div>
      <p className="truncate">{name}</p>
      <p className="truncate normal-case">{email}</p>
      <p className="truncate">{phone}</p>
      <p className="truncate">{enrollNumber}</p>
      <p className="truncate">{new Date(createdAt).toDateString()}</p>
      <div className="action-group flex gap-x-2 justify-end">
        <Button className="btn-remove hover:bg-white">
          <img src={trash} alt="trash" />
        </Button>
        <Button className="btn-edit hover:bg-white">
          <img src={pen} alt="pen" />
        </Button>
      </div>
    </li>
  );
};

export default StudentListItem;
