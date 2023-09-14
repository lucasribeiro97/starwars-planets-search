import { useEffect, useState } from 'react';
import { PlanetType } from '../types';

function useFetch() {
  const [planets, setPlanets] = useState<PlanetType[]>([]);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      delete data.results.residents;
      const planetData = data.results;
      setPlanets(planetData);
    };
    getPlanets();
  });

  return planets;
}

export default useFetch;
