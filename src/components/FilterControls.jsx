import { CATEGORIES } from '../data/recipes'

// Category filter (buttons including "All") + sort dropdown.
// All values are owned by the parent and updated through callbacks.
export default function FilterControls({
  activeCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
}) {
  // "All" plus every defined category.
  const categories = ['All', ...CATEGORIES]

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {categories.map((category) => {
          const isActive = category === activeCategory
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={
                'rounded-full border px-3.5 py-1.5 text-sm transition ' +
                (isActive
                  ? 'border-accent bg-accent text-white'
                  : 'border-neutral-200 bg-white text-neutral-500 hover:border-accent hover:text-accent')
              }
            >
              {category}
            </button>
          )
        })}
      </div>

      <div className="flex items-center gap-2 text-sm text-neutral-500">
        <label htmlFor="sort">Sort by</label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="cursor-pointer rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5 text-sm text-neutral-900"
        >
          <option value="name-asc">Name (A–Z)</option>
          <option value="time-asc">Cook time (low to high)</option>
          <option value="time-desc">Cook time (high to low)</option>
        </select>
      </div>
    </div>
  )
}
