// Shown when no recipes match the current search + filter.
export default function EmptyState() {
  return (
    <div className="animate-fade-in rounded-lg border border-dashed border-neutral-200 bg-white px-4 py-12 text-center">
      <p className="text-lg font-semibold">No recipes found</p>
      <p className="mt-1.5 text-neutral-500">Try a different search term or category.</p>
    </div>
  )
}
