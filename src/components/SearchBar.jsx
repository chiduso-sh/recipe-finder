// Controlled text input. State lives in the parent (App) and is passed
// down via props, so search can be combined with the other controls.
export default function SearchBar({ value, onChange }) {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search recipes
      </label>
      <input
        id="search"
        type="text"
        placeholder="Search by name or ingredient..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
        className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-base text-neutral-900 transition focus:border-accent focus:outline-none focus:ring-3 focus:ring-accent-soft"
      />
    </div>
  )
}
