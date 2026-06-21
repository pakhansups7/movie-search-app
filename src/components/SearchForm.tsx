import { type FormEvent, useState } from "react";
import type { MovieTypeFilter } from "../types/movie";

type SearchFormProps = {
    onSearch: (title: string, typeFilter: MovieTypeFilter) => void;
};

export function SearchForm({ onSearch }: SearchFormProps) {
    const [title, setTitle] = useState("");
    const [typeFilter, setTypeFilter] = useState<MovieTypeFilter>("all");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmedTitle = title.trim();

        if (trimmedTitle === "") {
            return;
        }
        onSearch(trimmedTitle, typeFilter);
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Введите название фильма на английском"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)} // каждый раз когда пользователь что-то вводит в input, React берет новое значение из input и сохраняет его в state
            />
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