import './App.css';
import Table from './components/Table';
import SearchInput from './components/SearchInput';
import { SearchContextProvider } from './context/SearchContext';

function App() {
  return (
    <SearchContextProvider>
      <SearchInput />
      <Table />
    </SearchContextProvider>
  );
}

export default App;
