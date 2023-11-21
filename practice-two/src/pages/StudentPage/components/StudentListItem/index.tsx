import Button from '@components/Button';
import { TStudent } from 'src/types';

import pen from '@assets/pen.svg';
import trash from '@assets/trash.svg';
import { formatDate } from '@services/format';

type StudentListItemProps = {
  data: TStudent;
};

const StudentListItem: React.FC<StudentListItemProps> = ({ data }) => {
  const { avatar, createdAt, email, enrollNumber, id, name, phone } = data;

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
      <div className="action-group flex gap-x-2 justify-end">
        <Button className="btn-remove group-hover:hover:bg-white group-hover:bg-custom-light-pink">
          <img src={trash} alt="trash" />
        </Button>
        <Button className="btn-edit group-hover:hover:bg-white group-hover:bg-custom-light-pink">
          <img src={pen} alt="pen" />
        </Button>
      </div>
    </li>
  );
};

export default StudentListItem;
