import { useEffect, useState } from 'react';
import { PlanetType } from '../types';
import FetchApi from '../utils/FetchApi';

function useFetch() {
  const [planets, setPlanets] = useState<PlanetType[]>([]);

  useEffect(() => {
    const getPlanets = async () => {
      const data = await FetchApi('https://swapi.dev/api/planets');
      setPlanets(data);
    };
    getPlanets();
  }, []);

  return planets;
}

export default useFetch;
