import graduationCapBlue from '@assets/graduationCapBlue.svg';
import bookmarkPink from '@assets/bookmarkPink.svg';
import usdSquareYellow from '@assets/usdSquareYellow.svg';
import user from '@assets/user.svg';
import DashBoardCard from '@components/DashBoardCard';
import { PATH_NAME } from '@constants/services';

const DashBoardPage: React.FC = () => {
  return (
    <article className="dashboard-grid">
      <DashBoardCard
        to={PATH_NAME.STUDENTS}
        variant="fourthly"
        name="students"
        mainInfo="243"
      >
        <img src={graduationCapBlue} alt="graduation cap" />
      </DashBoardCard>

      <DashBoardCard
        to={PATH_NAME.COURSES}
        variant="thirdly"
        name="courses"
        mainInfo="13"
      >
        <img src={bookmarkPink} alt="graduation cap" />
      </DashBoardCard>

      <DashBoardCard
        to={PATH_NAME.PAYMENTS}
        variant="secondary"
        name="payments"
        mainInfo="inr 556,000"
      >
        <img src={usdSquareYellow} alt="graduation cap" />
      </DashBoardCard>

      <DashBoardCard
        to={PATH_NAME.SETTINGS}
        variant="primary"
        name="users"
        mainInfo="3"
      >
        <img src={user} alt="user" />
      </DashBoardCard>
    </article>
  );
};

export default DashBoardPage;
