import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import { PlanetType } from './types';

function App() {
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

  return (
    <Table planets={ planets } />
  );
}

export default App;
