import { TStudent } from '@utils/types';

// images
import pen from '@assets/pen.svg';
import trash from '@assets/trash.svg';
import Button from '@components/Button';

type StudentListItemProps = {
  data: TStudent;
};

const StudentListItem = (props: StudentListItemProps) => {
  const { data } = props;

  return (
    <li data-id={data.id} className="my-2 grid student">
      <div>
        <img
          src={data.avatar}
          alt="student avatar"
          width="60px"
          height="60px"
        />
      </div>
      <p className="truncate">{data.name}</p>
      <p className="truncate normal-case">{data.email}</p>
      <p className="truncate">{data.phone}</p>
      <p className="truncate">{data.enrollNumber}</p>
      <p className="truncate">{new Date(data.createdAt).toDateString()}</p>
      <div className="action-group flex gap-x-2 justify-end">
        <Button className="remove-btn hover:bg-white">
          <img src={trash} alt="trash" />
        </Button>
        <Button className="edit-btn hover:bg-white">
          <img src={pen} alt="pen" />
        </Button>
      </div>
    </li>
  );
};

export default StudentListItem;
