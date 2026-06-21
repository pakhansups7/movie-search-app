# Movie Search App

Movie Search App — это учебное приложение на React + TypeScript для поиска фильмов, сериалов и эпизодов через OMDb API.

## Возможности

* Поиск фильмов по названию
* Фильтрация результатов по типу:

    * все
    * фильмы
    * сериалы
    * эпизоды
* Отображение списка найденных фильмов
* Просмотр подробной информации о выбранном фильме
* Обработка загрузки и ошибок
* Разделение API-типов и внутренних типов приложения
* Использование mapper-функций для преобразования данных из API
* Хранение API key в `.env`

## Стек технологий

* React
* TypeScript
* Vite
* OMDb API

## Структура проекта

```txt
src/
├── api/
│   └── moviesApi.ts
├── components/
│   ├── MovieCard.tsx
│   ├── MovieDetailsCard.tsx
│   ├── MovieList.tsx
│   └── SearchForm.tsx
├── types/
│   └── movie.ts
├── utils/
│   └── movieMappers.ts
├── App.tsx
└── main.tsx
```

## Установка и запуск

Склонируйте репозиторий:

```bash
git clone <repository-url>
```

Перейдите в папку проекта:

```bash
cd movie-search-app
```

Установите зависимости:

```bash
npm install
```

Создайте файл `.env` в корне проекта и добавьте API key:

```env
VITE_OMDB_API_KEY=your_api_key_here
```

Запустите проект:

```bash
npm run dev
```

## Доступные команды

```bash
npm run dev
```

Запуск проекта в режиме разработки.

```bash
npm run build
```

Проверка TypeScript и сборка production-версии.

```bash
npm run lint
```

Проверка проекта через ESLint.

```bash
npm run preview
```

Предпросмотр production-сборки.

## Что было отработано в проекте

В этом проекте я отработал:

* работу с React-компонентами;
* передачу props;
* controlled input и select;
* работу с `useState`;
* асинхронные запросы через `fetch`;
* обработку loading/error состояний;
* типизацию API-ответов;
* преобразование API-данных через mapper-функции;
* разделение ответственности между компонентами.

## Примечание

Для работы приложения нужен API key от OMDb API. Файл `.env` не добавляется в репозиторий, поэтому для примера используется `.env.example`.

