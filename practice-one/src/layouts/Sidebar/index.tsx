import { NavLink, To } from 'react-router-dom';
import Button from '@components/Button';
import { PATH_NAME } from '@constants/services';

// images
import avatar from '@assets/avatar.png';
import smallLogo from '@assets/smallLogo.svg';
import house from '@assets/house.svg';
import bookmark from '@assets/bookmark.svg';
import graduationCap from '@assets/graduationCap.svg';
import usdSquare from '@assets/usdSquare.svg';
import fileChartLine from '@assets/fileChartLine.svg';
import sliderSquare from '@assets/sliderSquare.svg';
import signOut from '@assets/signOut.svg';

// constants
import { AuthType } from '@utils/types';

type SidebarProps = {
  setAuth: React.Dispatch<React.SetStateAction<AuthType>>;
  username: string;
};

const NavList: { to: To; imgSrc?: string; alt?: string; innerText: string }[] =
  [
    { to: PATH_NAME.HOME, imgSrc: house, alt: 'house', innerText: 'home' },
    {
      to: PATH_NAME.COURSES,
      imgSrc: bookmark,
      alt: 'book mark',
      innerText: 'courses',
    },
    {
      to: PATH_NAME.STUDENTS,
      imgSrc: graduationCap,
      alt: 'graduation cap',
      innerText: 'students',
    },
    {
      to: PATH_NAME.PAYMENTS,
      imgSrc: usdSquare,
      alt: 'usd square',
      innerText: 'payments',
    },
    {
      to: PATH_NAME.REPORTS,
      imgSrc: fileChartLine,
      alt: 'file chart line',
      innerText: 'reports',
    },
    {
      to: PATH_NAME.SETTINGS,
      imgSrc: sliderSquare,
      alt: 'slider square',
      innerText: 'settings',
    },
  ];

const Sidebar = ({ setAuth, username }: SidebarProps) => {
  const handleLogout = () => setAuth(null);

  return (
    <aside className="sidebar">
      <div className="flex-center">
        <img src={smallLogo} alt="Logo" />
        <p className="ml-3 text-xl uppercase font-700">CRUD operations</p>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <div className="w-32 h-32">
          <div className="img-container">
            <img
              src={avatar}
              alt="avatar"
              className="rounded-full w-full h-full"
            />
          </div>
        </div>
        <h2 className="font-700 text-xl">{username}</h2>
        <p className="text-custom-yellow">Admin</p>
      </div>
      <nav className="p-5">
        <ul>
          {NavList.map((item, index) => (
            <li key={index}>
              <NavLink className="nav-item" to={item.to}>
                <img src={item.imgSrc} alt={item.alt} />
                {item.innerText}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <Button
        className="capitalize hover:bg-custom-gray"
        onClick={handleLogout}
      >
        logout
        <img src={signOut} alt="sign out" className="inline-block ml-3" />
      </Button>
    </aside>
  );
};

export default Sidebar;
