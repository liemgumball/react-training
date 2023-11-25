import { Dispatch, SetStateAction } from 'react';

type SortOptionProps = {
  active?: boolean;
  value: string;
  children?: React.ReactNode;
  setActive: Dispatch<SetStateAction<string>>;
};

const SortOption = (props: SortOptionProps) => {
  const { value, children, setActive, active } = props;

  return (
    <li
      value={value}
      className={`sort-option ${active ? 'active' : ''}`}
      onClick={() => setActive(value)}
    >
      {children}
    </li>
  );
};

export default SortOption;
