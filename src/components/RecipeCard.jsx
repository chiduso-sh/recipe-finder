// A single recipe summary card. Clicking (or pressing Enter/Space) opens
// the detail view via the onSelect callback.
export default function RecipeCard({ recipe, onSelect }) {
  return (
    <article
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
      className="cursor-pointer rounded-lg border border-neutral-200 bg-white p-4 shadow-sm transition duration-150 hover:-translate-y-0.5 hover:border-accent hover:shadow-md focus-visible:border-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-accent-soft"
    >
      <span className="inline-block rounded bg-accent-soft px-2 py-0.5 text-xs uppercase tracking-wide text-accent">
        {recipe.category}
      </span>
      <h3 className="mt-2.5 mb-3 text-base font-semibold">{recipe.name}</h3>
      <dl className="flex gap-6">
        <div>
          <dt className="text-xs uppercase tracking-wide text-neutral-500">Cook time</dt>
          <dd className="mt-0.5 font-semibold">{recipe.cookTime} min</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide text-neutral-500">Servings</dt>
          <dd className="mt-0.5 font-semibold">{recipe.servings}</dd>
        </div>
      </dl>
    </article>
  )
}
