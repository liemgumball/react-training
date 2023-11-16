import { useContext } from 'react';
import { SearchQueryContext } from '@contexts/SearchQuery';
import Input from '@components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchQueryContext);

  return (
    <header className="flex justify-end gx-3 py-5 px-8">
      <div className="relative w-1/6 min-w-fit">
        <Input
          className="w-full"
          type="text"
          name="Search"
          id="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="text-custom-gray absolute right-5 top-1/2 transform -translate-y-1/2"
        />
      </div>
    </header>
  );
};

export default Header;
