import { useState } from "react";
import type {Movie, MovieDetails, MovieTypeFilter} from "./types/movie";
import { MovieList } from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";
import { searchMovies, getMovieDetails } from "./api/moviesApi";
import "./App.css"

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [selectedMovieDetails, setSelectedMovieDetails] = useState<MovieDetails | null>(null);
    const [detailsLoading, setDetailsLoading] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
    const [detailsError, setDetailsError] = useState("");

    async function handleSearch(title: string, typeFilter: MovieTypeFilter) {
        setSelectedMovieId(null);
        setSelectedMovieDetails(null);
        setDetailsLoading(false);
        setDetailsError("");
        setHasSearched(true);
        setLoading(true);
        setError("");

        try {
            const foundMovies = await searchMovies(title, typeFilter);
            setMovies(foundMovies);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
                setMovies([]);
            } else {
                setError("Произошла неизвестная ошибка");
                setMovies([]);
            }
        } finally {
            setLoading(false);
        }
    }

    async function handleSelectMovie(movieId: string) {
        setSelectedMovieId(movieId);
        setSelectedMovieDetails(null);
        setDetailsLoading(true);
        setDetailsError("");

        try {
            const details = await getMovieDetails(movieId);
            setSelectedMovieDetails(details);
        } catch (error) {
            if (error instanceof Error) {
                setDetailsError(error.message);
            } else {
                setDetailsError("Произошла неизвестная ошибка");
            }
        } finally {
            setDetailsLoading(false);
        }
    }

    return (
        <main>
            <h1>Movie Search App</h1>
            {/*SearchForm сам не делает API-запрос. Он только вызывает onSearch(title). А уже App.tsx решает, что делать с этим title.*/}
            <SearchForm
                onSearch={handleSearch}
            />
            {loading ? <p>Загрузка...</p> : null}
            {error ? <p>{error}</p> : null}
            {hasSearched && !loading && !error ?
                <MovieList
                    movies={movies}
                    onSelectMovie={handleSelectMovie}
                    selectedMovieDetails={selectedMovieDetails}
                    detailsLoading={detailsLoading}
                    selectedMovieId={selectedMovieId}
                    detailsError={detailsError}
                /> : null}
        </main>
    );
}

export default App
