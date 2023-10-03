import ButtonIcon from '@components/ButtonIcon';
import { TStudent } from '@utils/types';

// images
import pen from '@assets/pen.svg';
import trash from '@assets/trash.svg';

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
        <ButtonIcon iconSrc={trash} alt="trash" className="remove-btn" />
        <ButtonIcon iconSrc={pen} alt="pen" className="edit-btn" />
      </div>
    </li>
  );
};

export default StudentListItem;
