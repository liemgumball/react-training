import useToggle from '@hooks/useToggle';
import sort from '@assets/sort.svg';

type SortMenuProps = {
  onClick: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
};

const SortMenu = ({ children, onClick }: SortMenuProps) => {
  const { isOn, toggle } = useToggle();

  return (
    <div
      className="relative transition border rounded-lg"
      onMouseEnter={toggle}
      onMouseLeave={toggle}
    >
      <img className="p-3" src={sort} alt="sort icon" />
      <ul className={`${isOn ? '' : 'invisible'} sort-menu`} onClick={onClick}>
        {children}
      </ul>
    </div>
  );
};

export default SortMenu;
