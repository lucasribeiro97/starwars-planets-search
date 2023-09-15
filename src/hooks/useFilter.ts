import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

export const useFilter = () => {
  const context = useContext(FilterContext);

  return {
    filter: context.filter,
    setFilter: context.setFilter,
  };
};
