import axios from "axios";

export async function fetchMovies(filters: any) {
  const { searchTerm, type, year } = filters;

  try {
    const response = await axios.get(
      `${process.env.SEARCH_API}${type || "movie"}`,
      {
        params: {
          api_key: process.env.API_KEY,
          query: searchTerm,
          include_adult: false,
          year: year || "",
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching: ", error);
    return [];
  }
}

export async function getDiscover({ genre, type, year }: any) {
  try {
    const params: any = {
      api_key: process.env.API_KEY,
      include_adult: false,
    };
    if (genre) params.with_genres = genre;
    if (year) params.primary_release_year = year;

    const response = await axios.get(
      `${process.env.DISCOVER_API}/${type || "movie"}`,
      {
        params,
      }
    );

    return response.data.results;
  } catch (error) {
    console.error("Error fetching discover movies:", error);
    return [];
  }
}

export async function fetchGenres(type = "movie") {
  try {
    const response = await axios.get(`${process.env.GENRE_URL}/${type}/list`, {
      params: {
        api_key: process.env.API_KEY,
      },
    });

    return response.data.genres;
  } catch (error) {
    console.error("Error fetching discover movies:", error);
    return [];
  }
}

export async function fetchCredits(id: string, type: string) {
  try {
    const response = await axios.get(
      `${process.env.DETAILS_API}${type || "movie"}/${id}/credits`,
      {
        params: {
          api_key: process.env.API_KEY,
        },
      }
    );

    return response;
  } catch (error) {
    console.error("Error fetching: ", error);
    return null;
  }
}

export function getPosterUrl(part: string): string {
  return `${process.env.IMG_PATH}${part}`;
}

export async function fetchMovieDetails(id: string, type?: string) {
  try {
    const response = await axios.get(
      `${process.env.DETAILS_API}${type || "movie"}/${id}`,
      {
        params: {
          api_key: process.env.API_KEY,
        },
      }
    );

    return response;
  } catch (error) {
    console.error("Error fetching: ", error);
    return [];
  }
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
