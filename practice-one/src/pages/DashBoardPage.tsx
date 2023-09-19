import graduationCapBlue from '@assets/graduationCapBlue.svg'
import bookmarkPink from '@assets/bookmarkPink.svg'
import usdSquareYellow from '@assets/usdSquareYellow.svg'
import user from '@assets/user.svg'
import DashBoardCard from '@components/DashBoardCard'

const DashBoardPage = () => {
  return (
    <article className="p-8 h-auto grid grid-cols-4 gap-8 items-strech">
      <DashBoardCard
        to="/students"
        className="bg-custom-light-blue text-custom-dark-gray"
        cardName="students"
        mainInfo="243"
      >
        <div className="img-container">
          <img src={graduationCapBlue} alt="graduation cap" />
        </div>
      </DashBoardCard>
      <DashBoardCard
        to="/"
        className="bg-custom-light-pink text-custom-dark-gray"
        cardName="courses"
        mainInfo="13"
      >
        <div className="img-container">
          <img src={bookmarkPink} alt="graduation cap" />
        </div>
      </DashBoardCard>
      <DashBoardCard
        to="/"
        className="bg-custom-light-yellow text-custom-dark-gray"
        cardName="payments"
        mainInfo="inr 556,000"
      >
        <div className="img-container">
          <img src={usdSquareYellow} alt="graduation cap" />
        </div>
      </DashBoardCard>
      <DashBoardCard
        to="/"
        className="bg-custom-yellow text-white"
        cardName="users"
        mainInfo="3"
      >
        <div className="img-container">
          <img src={user} alt="user" />
        </div>
      </DashBoardCard>
    </article>
  )
}

export default DashBoardPage
