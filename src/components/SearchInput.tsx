import { useState } from 'react';
import { usePlanets } from '../hooks/usePlanets';

function SearchInput() {
  const { searchPlanets } = usePlanets();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: { target: { value: any; }; }) => {
    searchPlanets(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <input
      type="text"
      value={ inputValue }
      onChange={ handleInputChange }
      data-testid="name-filter"
    />
  );
}

export default SearchInput;
