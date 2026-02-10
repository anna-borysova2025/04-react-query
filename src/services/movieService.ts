import axios from 'axios';
import type { Movie } from '../types/movie';

interface TmdbResponse {
  results: Movie[];
  total_pages: number;
}


export const fetchMovies = async (topic: string, page: number = 1): Promise<TmdbResponse> => {
  const response = await axios.get<TmdbResponse>(
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
  return response.data;
};