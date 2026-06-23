// Controlled text input. State lives in the parent (App) and is passed
// down via props, so search can be combined with the other controls.
export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="search" className="visually-hidden">
        Search recipes
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search by name or ingredient..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </div>
  )
}
