import Input from '@components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  const setSearchQuery = (value: string) => {
    setSearchParams(
      (prev) => {
        prev.set('q', value);
        return prev;
      },
      { replace: true }
    );
  };

  if (searchQuery.length > 50) throw new Error('Search query length error');

  return (
    <header className="flex justify-end gx-3 py-5 px-8">
      <div className="relative w-1/6 min-w-fit">
        <Input
          className="w-full pr-12"
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
