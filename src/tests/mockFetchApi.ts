import { mockPlanets } from "./mocks";

export const mockFetchApi = () => Promise.resolve({
  json: () => Promise.resolve(mockPlanets),
})
