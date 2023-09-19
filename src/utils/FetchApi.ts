const FetchApi = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  if (data.results && data.results.residents) {
    delete data.results.residents;
  }
  const planetsData = data.results;
  return planetsData;
};

export default FetchApi;
