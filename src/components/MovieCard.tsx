import type { Movie } from "../types/movie";

type MovieCardProps = {
    movie: Movie;
    onSelectMovie: (movieId: string) => void;
};

export function MovieCard({ movie, onSelectMovie }: MovieCardProps) {
    return (
        <div>
            <h2>{movie.title}</h2>

            {movie.posterUrl !== "N/A" ? (
                <img src={movie.posterUrl} alt={movie.title} />
            ) : (
                <p className="poster-placeholder">Постер отсутствует</p>
            )}

            <p>Год: {movie.year}</p>
            <p>Тип: {movie.type}</p>

            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation();
                    onSelectMovie(movie.id);
                }}
            >
                Подробнее
            </button>
        </div>
    );
}