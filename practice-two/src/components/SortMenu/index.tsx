import useToggle from '@hooks/useToggle';

type SortMenuProps = {
  icon: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
};

const SortMenu = ({ icon, children, onClick }: SortMenuProps) => {
  const { isOn, toggle } = useToggle();

  return (
    <div
      className="relative transition"
      onMouseEnter={toggle}
      onMouseLeave={toggle}
    >
      <button className="p-3">
        {icon ? <img src={icon} alt="sort icon" /> : ''}
      </button>
      <ul className={`${isOn ? '' : 'invisible'} sort-menu`} onClick={onClick}>
        {children}
      </ul>
    </div>
  );
};

export default SortMenu;
