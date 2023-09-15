import './App.css';
import Table from './components/Table';
import SearchInput from './components/SearchInput';
import { SearchContextProvider } from './context/SearchContext';
import SelectFilters from './components/SelectFilters';
import { FilterProvider } from './context/FilterContext';
import { PlanetContextProvider } from './context/PlanetContext';

function App() {
  return (
    <PlanetContextProvider>
      <FilterProvider>
        <SearchContextProvider>
          <SearchInput />
          <SelectFilters />
          <Table />
        </SearchContextProvider>
      </FilterProvider>
    </PlanetContextProvider>
  );
}

export default App;
