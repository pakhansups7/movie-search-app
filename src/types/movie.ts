export type MovieType = "movie" | "series" | "episode";
export type MovieTypeFilter = "all" | MovieType;

export type Movie = {
    id: string;
    title: string;
    year: string;
    type: MovieType;
    posterUrl: string;
};

export type MovieApiItem = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: MovieType;
    Poster: string;
};

export type MoviesSearchApiResponse = {
    Search?: MovieApiItem[];
    totalResults?: string;
    Response: "True" | "False";
    Error?: string;
};

export type MovieDetailsApiResponse = {
    Title: string;
    Year: string;
    Poster: string;
    Plot: string;
    Genre: string;
    Director: string;
    Actors: string;
    Runtime: string;
    imdbRating: string;
    imdbID: string;
    Type: MovieType;
    Response: "True" | "False";
    Error?: string;
};

export type MovieDetails = {
    id: string;
    title: string;
    year: string;
    posterUrl: string;
    plot: string;
    genre: string;
    director: string;
    actors: string;
    runtime: string;
    imdbRating: string;
    type: MovieType;
};