// A single recipe summary card. Clicking (or pressing Enter/Space) opens
// the detail view via the onSelect callback.
export default function RecipeCard({ recipe, onSelect }) {
  return (
    <article
      className="recipe-card"
      onClick={() => onSelect(recipe)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(recipe)
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View ${recipe.name}`}
    >
      <span className="card-category">{recipe.category}</span>
      <h3 className="card-name">{recipe.name}</h3>
      <dl className="card-meta">
        <div>
          <dt>Cook time</dt>
          <dd>{recipe.cookTime} min</dd>
        </div>
        <div>
          <dt>Servings</dt>
          <dd>{recipe.servings}</dd>
        </div>
      </dl>
    </article>
  )
}
