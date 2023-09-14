import { useSearch } from '../hooks/useSearch';

function SearchInput() {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleInputChange = (e: { target: { value: any; }; }) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      value={ searchTerm }
      onChange={ handleInputChange }
      data-testid="name-filter"
    />
  );
}

export default SearchInput;
