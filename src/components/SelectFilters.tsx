import { SetStateAction, useState } from 'react';
import { usePlanets } from '../hooks/usePlanets';
import { FilterType } from '../types';

function SelectFilters() {
  const { filterPlanets } = usePlanets();
  const [filters, setFilters] = useState<FilterType[]>([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleColumnChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setColumn(e.target.value);
  };

  const handleComparisonChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setComparison(e.target.value);
  };

  const handleValueChange = (e: { target: { value: any; }; }) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    const newFilter = { column, comparison, value };
    setFilters([...filters, newFilter]);
    filterPlanets([...filters, newFilter]);
  };

  const removeFilter = (index: number) => {
    const updatedFilters = [...filters];
    updatedFilters.splice(index, 1);
    setFilters(updatedFilters);
    filterPlanets(updatedFilters);
  };

  return (
    <div>
      <select
        value={ column }
        onChange={ handleColumnChange }
        data-testid="column-filter"
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
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
          <li key={ index }>
            {filter.column}
            {' '}
            {filter.comparison}
            {' '}
            {filter.value}
            <button onClick={ () => removeFilter(index) }>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectFilters;
