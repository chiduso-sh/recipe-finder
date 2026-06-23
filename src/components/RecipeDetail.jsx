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
    <div className="modal-backdrop" onClick={onClose}>
      {/* Stop clicks inside the dialog from bubbling up to the backdrop. */}
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={recipe.name}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span className="card-category">{recipe.category}</span>
            <h2>{recipe.name}</h2>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="modal-meta">
          <span>{recipe.cookTime} min</span>
          <span>{recipe.servings} servings</span>
        </div>

        <section>
          <h3>Ingredients</h3>
          <ul className="ingredient-list">
            {recipe.ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Instructions</h3>
          <p className="instructions">{recipe.instructions}</p>
        </section>
      </div>
    </div>
  )
}
