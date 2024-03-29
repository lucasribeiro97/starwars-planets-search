import { useContext, useEffect } from 'react';
import { PlanetContext } from '../context/PlanetContext';
import useFetch from './useFetch';
import { FilterType, PlanetType } from '../types';

export const usePlanets = () => {
  const planetsData = useFetch();
  const {
    planets,
    filteredPlanets,
    setPlanets,
    setFilteredPlanets,
  } = useContext(PlanetContext);

  useEffect(() => {
    setPlanets(planetsData);
    setFilteredPlanets(planetsData);
  }, [planetsData, setPlanets, setFilteredPlanets]);

  const searchPlanets = (query: string) => {
    const searchedPlanets = planets
      .filter((planet) => planet.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredPlanets(searchedPlanets);
  };

  const filterPlanets = (filters: FilterType[]) => {
    let filteredPlanetsData = [...planets];

    filters.forEach((filter) => {
      const { column, comparison, value } = filter;
      const numberValue = Number(value);

      filteredPlanetsData = filteredPlanetsData.filter((planet) => {
        const planetValue = Number(planet[column as keyof PlanetType]);

        switch (comparison) {
          case 'maior que':
            return planetValue > numberValue;
          case 'menor que':
            return planetValue < numberValue;
          case 'igual a':
            return planetValue === numberValue;
          default:
            return true;
        }
      });
    });

    setFilteredPlanets(filteredPlanetsData);
  };

  return {
    planets,
    filteredPlanets,
    searchPlanets,
    filterPlanets,
  };
};
