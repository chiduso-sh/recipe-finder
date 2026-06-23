import { useEffect } from 'react'

// Modal detail view. Shows everything about one recipe and provides
// two ways to close: the Close button and the Escape key. Clicking the
// dark backdrop (outside the dialog) also closes it.
export default function RecipeDetail({ recipe, onClose }) {
  // Close on Escape, and lock background scroll while open.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      className="animate-fade-in fixed inset-0 z-10 flex items-start justify-center overflow-y-auto bg-neutral-900/45 p-4 sm:p-8"
    >
      {/* Stop clicks inside the dialog from bubbling up to the backdrop. */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={recipe.name}
        onClick={(e) => e.stopPropagation()}
        className="animate-modal-in w-full max-w-xl rounded-lg bg-white p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-block rounded bg-accent-soft px-2 py-0.5 text-xs uppercase tracking-wide text-accent">
              {recipe.category}
            </span>
            <h2 className="mt-2 text-2xl font-semibold">{recipe.name}</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white text-2xl leading-none text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
          >
            ×
          </button>
        </div>

        <div className="my-4 flex gap-3 text-sm text-neutral-500">
          <span className="rounded bg-neutral-100 px-2.5 py-1">{recipe.cookTime} min</span>
          <span className="rounded bg-neutral-100 px-2.5 py-1">{recipe.servings} servings</span>
        </div>

        <section className="mt-5">
          <h3 className="mb-2 text-base font-semibold">Ingredients</h3>
          <ul className="columns-2 gap-6 pl-5 [&>li]:mb-1 [&>li]:list-disc sm:columns-2">
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-5">
          <h3 className="mb-2 text-base font-semibold">Instructions</h3>
          <p className="text-neutral-900">{recipe.instructions}</p>
        </section>
      </div>
    </div>
  )
}
