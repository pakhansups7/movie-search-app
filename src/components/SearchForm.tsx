import { type FormEvent, useEffect, useState } from "react";
import type { MovieTypeFilter } from "../types/movie";

type SearchFormProps = {
    onSearch: (title: string, typeFilter: MovieTypeFilter) => void;
};

export function SearchForm({ onSearch }: SearchFormProps) {
    const [title, setTitle] = useState("");
    const [typeFilter, setTypeFilter] = useState<MovieTypeFilter>("all");
    const [searchHistory, setSearchHistory] = useState<string[]>([]);

    useEffect(() => {
        const savedHistory = localStorage.getItem("movieSearchHistory");

        if (savedHistory) {
            setSearchHistory(JSON.parse(savedHistory));
        }
    }, []);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmedTitle = title.trim();

        if (trimmedTitle === "") {
            return;
        }

        const updateHistory = [
            trimmedTitle,
            ...searchHistory.filter((item) => item !== trimmedTitle),
        ].slice(0, 10);

        setSearchHistory(updateHistory);
        localStorage.setItem("movieSearchHistory", JSON.stringify(updateHistory));

        onSearch(trimmedTitle, typeFilter);
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Введите название фильма на английском"
                type="text"
                value={title}
                list="movie-search-history"
                onChange={(event) => setTitle(event.target.value)}
            />
            <datalist id="movie-search-history">
                {searchHistory.map((item) => (
                    <option key={item} value={item} />
                ))}
            </datalist>
            <select
                value={typeFilter}
                onChange={(event) => setTypeFilter(event.target.value as MovieTypeFilter)}
            >
                <option value="all">Все</option>
                <option value="movie">Фильмы</option>
                <option value="series">Сериалы</option>
                <option value="episode">Эпизоды</option>
            </select>
            <button type="submit">Поиск</button>
        </form>
    );
}