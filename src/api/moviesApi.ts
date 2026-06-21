import type { Movie, MoviesSearchApiResponse, MovieTypeFilter, MovieDetails, MovieDetailsApiResponse } from "../types/movie";
import { mapMoviesFromApi, mapMovieDetailsFromApi } from "../utils/movieMappers";

const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export async function searchMovies(query: string, typeFilter: MovieTypeFilter): Promise<Movie[]> {
    const typeQuery = typeFilter === "all" ? "" : `&type=${typeFilter}`;

    const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}${typeQuery}`
    );

    if (!response.ok) {
        throw new Error("Could not find movie");
    }

    const data: MoviesSearchApiResponse = await response.json();

    if (data.Response === "False") {
        throw new Error(data.Error ?? "Movie not found");
    }

    if (data.Search) {
        return mapMoviesFromApi(data.Search);
    }

    return [];
}

export async function getMovieDetails(imdbID: string): Promise<MovieDetails> {
    const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`
    );

    if (!response.ok) {
        throw new Error("Could not fetch movie details");
    }

    const data: MovieDetailsApiResponse = await response.json();

    if (data.Response === "False") {
        throw new Error(data.Error ?? "Movie details not found");
    }

    return mapMovieDetailsFromApi(data);
}