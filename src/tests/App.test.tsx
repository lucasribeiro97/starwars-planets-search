import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { PlanetContextProvider } from '../context/PlanetContext';
import { mockPlanets } from './mocks';
import {vi} from 'vitest';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  const MOCK_RESPONSE = {
    ok: true,
    status: 200,
    json: async () => mockPlanets,
  } as Response;

  const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
});

afterEach(() => {
  vi.restoreAllMocks();
})

test('Testa se é feito a requisição a api', () => {
  render(
    <PlanetContextProvider>
      <App />
    </PlanetContextProvider>
  );

  const api = 'https://swapi.dev/api/planets';
  expect(global.fetch).toHaveBeenCalled();
  expect(global.fetch).toHaveBeenCalledWith(api)
});

test('Testa se os inputs de search e number e o button são exibidos na página', () => {
  render(
    <PlanetContextProvider>
      <App />
    </PlanetContextProvider>
  );

  const inputSearch = screen.getByTestId('name-filter');
  const inputNumber = screen.getByTestId('value-filter')
  const filterButton = screen.getByRole('button', { name: /FILTRAR/i });

  expect(inputSearch).toBeInTheDocument();
  expect(inputNumber).toBeInTheDocument();
  expect(filterButton).toBeInTheDocument();

  const selectColumn = screen.getByTestId('column-filter')
  const comparasion = screen.getByTestId('comparison-filter')
  const inputValue = screen.getByTestId('value-filter')

  userEvent.selectOptions(selectColumn, 'population');
  userEvent.selectOptions(comparasion, 'igual a');
  userEvent.type(inputValue, '15')
  
  const buttonFilter = screen.getByTestId('button-filter');
  
  userEvent.click(buttonFilter);
  const filterRender = screen.getByTestId('filter');
  expect(filterRender).toBeInTheDocument();
  expect(filterRender).toHaveTextContent('population');
  expect(filterRender).toHaveTextContent('igual a');
  expect(filterRender).toHaveTextContent('15');
});
