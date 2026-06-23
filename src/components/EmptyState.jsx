// Shown when no recipes match the current search + filter.
export default function EmptyState() {
  return (
    <div className="empty-state">
      <p className="empty-title">No recipes found</p>
      <p className="empty-hint">Try a different search term or category.</p>
    </div>
  )
}
