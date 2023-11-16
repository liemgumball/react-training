type SortOptionProps = {
  active?: boolean;
  value: string;
  children?: React.ReactNode;
};

const SortOption = ({ value, children, active }: SortOptionProps) => {
  return (
    <li value={value} className={`sort-option ${active ? 'active' : ''}`}>
      {children}
    </li>
  );
};

export default SortOption;
