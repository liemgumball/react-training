import useToggle from '@hooks/useToggle';
import sort from '@assets/sort.svg';

type SortMenuProps = {
  onClick: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
};

const SortMenu = ({ children, onClick }: SortMenuProps) => {
  const { isOn, toggle, reset } = useToggle();

  return (
    <div
      className="relative rounded-lg"
      onMouseEnter={toggle}
      onMouseLeave={reset}
    >
      <img className="p-3" src={sort} alt="sort icon" />
      <ul className={`${isOn ? '' : 'invisible'} sort-menu`} onClick={onClick}>
        {children}
      </ul>
    </div>
  );
};

export default SortMenu;
