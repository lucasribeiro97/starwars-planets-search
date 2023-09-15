import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { useFilter } from '../hooks/useFilter';
import { PlanetType } from '../types';

function SelectFilters() {
  const { filter, setFilter } = useFilter();
  const planets = useFetch();
  const [filteredPlanets, setFilteredPlanets] = useState<PlanetType[]>([]);

  const handleColumnChange = (e: { target: { value: any; }; }) => {
    setFilter({ ...filter, column: e.target.value });
  };

  const handleComparisonChange = (e: { target: { value: any; }; }) => {
    setFilter({ ...filter, comparison: e.target.value });
  };

  const handleValueChange = (e: { target: { value: any; }; }) => {
    setFilter({ ...filter, value: Number(e.target.value) });
  };

  function filterPlanets() {
    const filtered = planets.filter((planet) => {
      const planetValue = Number(planet[filter.column as keyof PlanetType]);
      switch (filter.comparison) {
        case 'maior que':
          return planetValue > filter.value;
        case 'menor que':
          return planetValue < filter.value;
        case 'igual a':
          return planetValue === filter.value;
        default:
          return true;
      }
    });

    setFilteredPlanets(filtered);
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ filter.column }
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
        value={ filter.comparison }
        onChange={ handleComparisonChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="text"
        data-testid="value-filter"
        value={ Number(filter.value) }
        onChange={ handleValueChange }
      />
      <button
        data-testid="button-filter"
        onClick={ filterPlanets }
      >
        FILTRAR
      </button>
    </div>
  );
}

export default SelectFilters;
