export type PlanetType = {
  name: string,
  rotation_period: string | number,
  orbital_period: string | number,
  diameter: string | number,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string | number,
  population: string | number,
  films: string[],
  created: string,
  edited: string,
  url: string,
};

export type PlanetContextType = {
  planets: PlanetType[],
  filteredPlanets: PlanetType[],
  setPlanets: (planet: PlanetType[]) => void,
  setFilteredPlanets: (planet: PlanetType[]) => void,
};

export type FilterType = {
  column: string,
  comparison: string,
  value: number,
};
