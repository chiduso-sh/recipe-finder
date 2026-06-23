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
    <div className="recipe-grid" key={recipes.map((r) => r.id).join('-')}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelect} />
      ))}
    </div>
  )
}
