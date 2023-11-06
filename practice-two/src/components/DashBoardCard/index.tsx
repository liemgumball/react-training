import { HTMLAttributes } from 'react';
import { Link, To } from 'react-router-dom';

export type DashBoardCardProps = {
  variant: 'primary' | 'secondary' | 'thirdly' | 'fourthly';
  name: string;
  mainInfo?: string;
  to: To;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLElement>;

const DashBoardCard: React.FC<DashBoardCardProps> = (props) => {
  const { variant, name, mainInfo, children, to, ...rest } = props;

  return (
    <Link
      className={`dashboard-card dashboard-card-${variant}`}
      to={to}
      {...rest}
    >
      {children}
      <p className="text mt-2 capitalize">{name}</p>
      <p className="text-4xl mt-3 text-black font-700 text-end uppercase truncate">
        {mainInfo}
      </p>
    </Link>
  );
};

export default DashBoardCard;
