import axios from 'axios';
import type { Movie } from '../types/movie';

interface tmdbResponse {
  results: Movie[];
  total_pages: number;
}

interface moviesResponce {
  movies: Movie[];
  totalPages: number;
}

export const fetchMovies = async (topic: string, page: number = 1): Promise<moviesResponce> => {
  const response = await axios.get<tmdbResponse>(
    'https://api.themoviedb.org/3/search/movie',
    {
      params: {
        query: topic,
        page: page,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
      },
    },
  );
  return {
    movies: response.data.results,
totalPages: response.data.total_pages,
};
};