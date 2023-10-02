import Input from '@components/Input';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type HeaderProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
} & React.HTMLAttributes<HTMLElement>;

const Header = ({ searchText, setSearchText, ...rest }: HeaderProps) => {
  return (
    <header className="flex justify-end gx-3 py-5 px-8" {...rest}>
      <div className="relative">
        <Input
          type="text"
          name="Search"
          id="search"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="text-custom-gray search-input-icon"
        />
      </div>
    </header>
  );
};

export default Header;
