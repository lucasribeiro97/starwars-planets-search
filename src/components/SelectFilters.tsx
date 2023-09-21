import { useState } from 'react';
import { usePlanets } from '../hooks/usePlanets';
import { FilterType } from '../types';

function SelectFilters() {
  const { filterPlanets } = usePlanets();
  const [filters, setFilters] = useState<FilterType[]>([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [availableColumns, setAvailableColumns] = useState(
    [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  );

  const filteredAvailableColumns = availableColumns.filter((col) => {
    return !filters.some((filter) => filter.column === col);
  });

  const handleColumnChange = (e: { target: { value: string; }; }) => {
    setColumn(e.target.value);
  };

  const handleComparisonChange = (e: { target: { value: string; }; }) => {
    setComparison(e.target.value);
  };

  const handleValueChange = (e: { target: { value: any; }; }) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    const newFilter = { column, comparison, value };
    setFilters([...filters, newFilter]);
    setAvailableColumns((prevColumns) => prevColumns.filter((col) => col !== column));
    setColumn(availableColumns[0]);
    filterPlanets([...filters, newFilter]);
  };

  const removeFilter = (index: number) => {
    const updatedFilters = [...filters];
    updatedFilters.splice(index, 1);
    setFilters(updatedFilters);
    filterPlanets(updatedFilters);
    setAvailableColumns((prevColumns) => [...prevColumns, filters[index].column]);
  };

  const removeAllFilters = () => {
    setFilters([]);
    filterPlanets([]); // Remover todas as filtragens
    setAvailableColumns([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]); // Restaurar todas as colunas
  };

  return (
    <div>
      <select
        value={ column }
        onChange={ handleColumnChange }
        data-testid="column-filter"
      >
        {filteredAvailableColumns.map((col) => (
          <option key={ col } value={ col }>
            {col}
          </option>
        ))}
      </select>
      <select
        value={ comparison }
        onChange={ handleComparisonChange }
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        value={ value }
        onChange={ handleValueChange }
        data-testid="value-filter"
      />
      <button
        onClick={ handleButtonClick }
        data-testid="button-filter"
      >
        FILTRAR
      </button>
      <ul>
        {filters.map((filter, index) => (
          <li key={ index } data-testid="filter">
            {filter.column}
            {' '}
            {filter.comparison}
            {' '}
            {filter.value}
            <button onClick={ () => removeFilter(index) }>X</button>
          </li>
        ))}
      </ul>
      <button
        onClick={ removeAllFilters }
        data-testid="button-remove-filters"
      >
        Remover todas filtragens
      </button>
    </div>
  );
}

export default SelectFilters;
