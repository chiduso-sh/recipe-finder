# Recipe Finder

A small React + Vite app for searching, filtering and sorting a local collection of recipes. Styled with Tailwind CSS v4. No backend — the data is a hardcoded array.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Where the core logic lives

The interesting part — search, filter and sort — all happens in one place:

- **`src/App.jsx`** — holds the shared state (`searchTerm`, `activeCategory`, `sortOption`, `selectedRecipe`) and derives the visible recipes inside a `useMemo`. The pipeline is: **category filter → search filter → sort**, written with plain `filter()` / `some()` / `sort()` and commented step by step.
- **`src/hooks/useDebounce.js`** — delays the search by ~300ms so filtering runs after typing stops, not on every keystroke.
- **`src/data/recipes.js`** — the recipe array and the list of categories.

## Components

| Component | Responsibility |
|-----------|----------------|
| `App` | Owns shared state; runs the filter/sort pipeline |
| `SearchBar` | Controlled text input |
| `FilterControls` | Category buttons (incl. "All") + sort dropdown |
| `RecipeList` | Renders the card grid, or the empty state |
| `RecipeCard` | One recipe summary; opens the detail view |
| `RecipeDetail` | Modal with full recipe details; closes via button, Escape, or backdrop click |
| `EmptyState` | "No recipes found" message |

State is lifted to `App` and passed down through props, so search, category and sort all stay in sync and combine.

## Features

- Live search across recipe **name and ingredients** (case-insensitive, debounced)
- Category filter with an "All" option, combinable with search
- Sort by name (A–Z) or cook time (low→high / high→low)
- Clickable recipe detail modal
- Empty state and a live result count
- Responsive card grid and subtle fade/hover animations (honors `prefers-reduced-motion`)
