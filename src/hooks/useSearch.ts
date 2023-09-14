import { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

export function useSearch() {
  const context = useContext(SearchContext);

  return {
    searchTerm: context.searchTerm,
    setSearchTerm: context.setSearchTerm,
  };
}
