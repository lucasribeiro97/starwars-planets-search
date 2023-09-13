import { createContext } from 'react';
import { ContextType } from '../types';

const PlanetContext = createContext<ContextType>({
  planets: [],
});

export default PlanetContext;
