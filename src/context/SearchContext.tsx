import { createContext, useState } from 'react';
import { SearchContextType } from '../types';

interface SearchContextProviderChildrenType {
  children: React.ReactNode;
}

export const SearchContext = createContext<SearchContextType>({
  searchTerm: '',
  setSearchTerm: () => {},
});

export function SearchContextProvider({ children } : SearchContextProviderChildrenType) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContext.Provider value={ { searchTerm, setSearchTerm } }>
      {children}
    </SearchContext.Provider>
  );
}
