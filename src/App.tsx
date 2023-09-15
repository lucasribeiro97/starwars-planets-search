import './App.css';
import Table from './components/Table';
import SearchInput from './components/SearchInput';
import SelectFilters from './components/SelectFilters';
import { PlanetContextProvider } from './context/PlanetContext';

function App() {
  return (
    <PlanetContextProvider>
      <SearchInput />
      <SelectFilters />
      <Table />
    </PlanetContextProvider>
  );
}

export default App;
