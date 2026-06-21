import type { MovieDetails } from "../types/movie";

type MovieDetailsCardProps = {
    movieDetails: MovieDetails;
};

export function MovieDetailsCard({ movieDetails }: MovieDetailsCardProps) {
    return (
        <section>
            <h2>{movieDetails.title}</h2>
            <p>{movieDetails.plot}</p>
            <p>Режиссёр: {movieDetails.director}</p>
            <p>Актёры: {movieDetails.actors}</p>
            <p>Жанр: {movieDetails.genre}</p>
            <p>Длительность: {movieDetails.runtime}</p>
            <p>IMDb: {movieDetails.imdbRating}</p>
        </section>
    );
}