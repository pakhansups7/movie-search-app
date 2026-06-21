import type { Movie, MovieApiItem, MovieDetailsApiResponse, MovieDetails } from "../types/movie";

export function mapMovieFromApi(apiItem: MovieApiItem): Movie {
    return {
        id: apiItem.imdbID,
        title: apiItem.Title,
        year: apiItem.Year,
        type: apiItem.Type,
        posterUrl: apiItem.Poster,
    };
}

export function mapMoviesFromApi(apiMovies: MovieApiItem[]): Movie[] {
    return apiMovies.map((apiMovie) => {
        return mapMovieFromApi(apiMovie)
    });
}

export function mapMovieDetailsFromApi(apiItemDetails: MovieDetailsApiResponse): MovieDetails {
    return {
        id: apiItemDetails.imdbID,
        title: apiItemDetails.Title,
        year: apiItemDetails.Year,
        posterUrl: apiItemDetails.Poster,
        plot: apiItemDetails.Plot,
        genre: apiItemDetails.Genre,
        director: apiItemDetails.Director,
        actors: apiItemDetails.Actors,
        runtime: apiItemDetails.Runtime,
        imdbRating: apiItemDetails.imdbRating,
        type: apiItemDetails.Type,
    };
}