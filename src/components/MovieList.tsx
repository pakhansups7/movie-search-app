import type { Movie, MovieDetails } from "../types/movie";
import { MovieCard } from "./MovieCard";
import { MovieDetailsCard } from "./MovieDetailsCard";

type MovieListProps = {
    movies: Movie[];
    onSelectMovie: (movieId: string) => void;
    selectedMovieDetails: MovieDetails | null;
    detailsLoading: boolean;
    selectedMovieId: string | null;
    detailsError: string;
};

export function MovieList({ movies, onSelectMovie, selectedMovieDetails, detailsLoading, selectedMovieId,detailsError }: MovieListProps) {
    if (movies.length === 0){
        return <p>Фильмы не найдены</p>;
    }
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <MovieCard
                        movie={movie}
                        onSelectMovie={onSelectMovie}
                    />
                    {detailsLoading && selectedMovieId === movie.id ? (
                        <p>Загрузка деталей...</p>
                    ) : null}

                    {detailsError && selectedMovieId === movie.id ? (
                        <p>{detailsError}</p>
                    ) : null}

                    {selectedMovieDetails?.id === movie.id ? (
                        <MovieDetailsCard movieDetails={selectedMovieDetails} />
                    ) : null}
                </li>
            ))}
        </ul>
    );
}