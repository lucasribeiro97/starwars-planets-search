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

export type SearchContextType = {
  searchTerm: string,
  setSearchTerm: (term: string) => void;
};

export type FilterContextType = {
  column: string,
  comparison: string,
  value: number,
};

export type SelectContextType = {
  filter: FilterContextType
  setFilter: (filter: FilterContextType) => void;
};
