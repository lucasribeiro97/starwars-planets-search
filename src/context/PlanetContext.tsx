import { ReactNode, createContext, useState } from 'react';
import { PlanetContextType, PlanetType } from '../types';

export const PlanetContext = createContext<PlanetContextType>({
  planets: [],
  filteredPlanets: [],
  setPlanets: () => {},
  setFilteredPlanets: () => {},
});

export function PlanetContextProvider({ children } : { children:ReactNode }) {
  const [planets, setPlanets] = useState<PlanetType[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState<PlanetType[]>([]);

  return (
    <PlanetContext.Provider
      value={ {
        planets,
        filteredPlanets,
        setPlanets,
        setFilteredPlanets,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}
