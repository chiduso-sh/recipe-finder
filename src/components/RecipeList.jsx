import RecipeCard from './RecipeCard'
import EmptyState from './EmptyState'

// Renders the grid of cards, or the empty state when there are none.
// The `key` on the wrapper restarts the fade-in animation whenever the
// visible set of recipes changes.
export default function RecipeList({ recipes, onSelect }) {
  if (recipes.length === 0) {
    return <EmptyState />
  }

  return (
    <div
      key={recipes.map((r) => r.id).join('-')}
      className="grid animate-fade-in grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4"
    >
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelect} />
      ))}
    </div>
  )
}
