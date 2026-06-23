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
    <div className="filter-controls">
      <div className="category-buttons" role="group" aria-label="Filter by category">
        {categories.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? 'category-btn active' : 'category-btn'}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="sort-control">
        <label htmlFor="sort">Sort by</label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="name-asc">Name (A–Z)</option>
          <option value="time-asc">Cook time (low to high)</option>
          <option value="time-desc">Cook time (high to low)</option>
        </select>
      </div>
    </div>
  )
}
