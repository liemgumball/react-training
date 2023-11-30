import { useSearchParams } from 'react-router-dom';

type SortOptionProps = {
  active?: boolean;
  value: string;
  children?: React.ReactNode;
};

const SortOption = (props: SortOptionProps) => {
  const { value, children, active } = props;
  const [, setSearchParams] = useSearchParams();

  return (
    <li
      value={value}
      className={`sort-option ${active ? 'active' : ''}`}
      onClick={() => {
        setSearchParams(
          (prev) => {
            prev.set('sort', value);
            return prev;
          },
          { replace: true }
        );
      }}
    >
      {children}
    </li>
  );
};

export default SortOption;
