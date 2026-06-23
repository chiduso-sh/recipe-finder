import { useMemo, useState } from 'react'
import { recipes } from './data/recipes'
import { useDebounce } from './hooks/useDebounce'
import SearchBar from './components/SearchBar'
import FilterControls from './components/FilterControls'
import RecipeList from './components/RecipeList'
import RecipeDetail from './components/RecipeDetail'

export default function App() {
  // --- Shared state, lifted up here and passed down via props ---
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortOption, setSortOption] = useState('name-asc')
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  // Debounce the search term so filtering runs ~300ms after typing stops,
  // not on every keystroke.
  const debouncedSearch = useDebounce(searchTerm, 300)

  // Derive the visible recipes from the raw data + the active controls.
  // useMemo recomputes only when an input actually changes.
  const visibleRecipes = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase()

    return (
      recipes
        // 1. CATEGORY FILTER — keep everything when "All" is selected,
        //    otherwise keep only recipes whose category matches.
        .filter((recipe) => {
          return activeCategory === 'All' || recipe.category === activeCategory
        })
        // 2. SEARCH FILTER — match the query against the name OR any
        //    ingredient, all lowercased for case-insensitive comparison.
        //    An empty query matches everything.
        .filter((recipe) => {
          if (query === '') return true
          const nameMatch = recipe.name.toLowerCase().includes(query)
          const ingredientMatch = recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(query)
          )
          const categoryMatch = recipe.category.toLowerCase().includes(query)
          return nameMatch || ingredientMatch || categoryMatch
        })
        // 3. SORT — copy with slice() first so we never mutate the source
        //    array, then sort by the chosen option.
        .slice()
        .sort((a, b) => {
          switch (sortOption) {
            case 'time-asc':
              return a.cookTime - b.cookTime
            case 'time-desc':
              return b.cookTime - a.cookTime
            case 'name-asc':
            default:
              return a.name.localeCompare(b.name)
          }
        })
    )
  }, [debouncedSearch, activeCategory, sortOption])

  return (
    <div className="mx-auto max-w-4xl px-5 pt-8 pb-16">
      <header className="mb-7">
        <h1 className="text-3xl font-semibold">Recipe Finder</h1>
        <p className="mt-1 text-neutral-500">
          Search, filter and sort a small recipe collection.
        </p>
      </header>

      <div className="mb-5 flex flex-col gap-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <FilterControls
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          sortOption={sortOption}
          onSortChange={setSortOption}
        />
      </div>

      <p className="mb-4 text-sm text-neutral-500">
        {visibleRecipes.length}{' '}
        {visibleRecipes.length === 1 ? 'recipe' : 'recipes'} found
      </p>

      <RecipeList recipes={visibleRecipes} onSelect={setSelectedRecipe} />

      {selectedRecipe && (
        <RecipeDetail
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  )
}
