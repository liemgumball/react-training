import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';

type SearchQueryProviderProps = {
  children?: ReactNode;
};

// context
export const SearchQueryContext = createContext<{
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}>({ searchQuery: '', setSearchQuery: () => {} });

const SearchQueryProvider: React.FC<SearchQueryProviderProps> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // reset search query to empty string every time navigate
  const location = useLocation();
  useEffect(() => {
    if (searchQuery) setSearchQuery('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <SearchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchQueryContext.Provider>
  );
};

export default SearchQueryProvider;
