import { useState } from 'react';
import { usePlanets } from '../hooks/usePlanets';

function SelectFilters() {
  const { filterPlanets } = usePlanets();
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState<number>(0);

  const handleColumnChange = (e: { target: { value: any; }; }) => {
    setColumn(e.target.value);
  };

  const handleComparisonChange = (e: { target: { value: any; }; }) => {
    setComparison(e.target.value);
  };

  const handleValueChange = (e: { target: { value: any; }; }) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    filterPlanets(column, comparison, value);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ handleColumnChange }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ handleComparisonChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ handleValueChange }
      />
      <button
        data-testid="button-filter"
        onClick={ handleButtonClick }
      >
        FILTRAR
      </button>
    </div>
  );
}

export default SelectFilters;
