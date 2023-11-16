import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

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

  return (
    <SearchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchQueryContext.Provider>
  );
};

export default SearchQueryProvider;
