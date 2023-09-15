import { createContext, useState } from 'react';
import { SelectContextType } from '../types';

interface SelectContextProviderChildrenType {
  children: React.ReactNode;
}

export const FilterContext = createContext<SelectContextType>({
  filter: {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  },
  setFilter: () => {},
});

export function FilterProvider({ children } : SelectContextProviderChildrenType) {
  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  return (
    <FilterContext.Provider value={ { filter, setFilter } }>
      {children}
    </FilterContext.Provider>
  );
}
