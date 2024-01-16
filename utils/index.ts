export async function fetchMovies(filters: any) {
  // TODO is page limit?
  // TODO should I implement my own limit?
  const { searchTerm, type, year, page } = filters;

  // TODO apikey to env variable
  // TODO Do I need default movie value?
  const apiKey = "394ab1e9";
  const url = `http://www.omdbapi.com/?s=${searchTerm || ""}&y=${
    year || ""
  }&type=${type || ""}&page=${page || ""}&apikey=${apiKey}`;
  const response = await fetch(url);

  const result = await response.json();

  return result;
}

export async function fetchMovieDetails(id: string) {
  return "";
}
