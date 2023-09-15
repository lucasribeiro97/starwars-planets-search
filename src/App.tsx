import './App.css';
import Table from './components/Table';
import SearchInput from './components/SearchInput';
import { SearchContextProvider } from './context/SearchContext';
import SelectFilters from './components/SelectFilters';
import { FilterProvider } from './context/FilterContext';

function App() {
  return (
    <FilterProvider>
      <SearchContextProvider>
        <SearchInput />
        <SelectFilters />
        <Table />
      </SearchContextProvider>
    </FilterProvider>
  );
}

export default App;
