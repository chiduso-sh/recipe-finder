import { useEffect, useState } from 'react'

// Returns a debounced copy of `value` that only updates after the user
// has stopped changing it for `delay` ms. This stops the search filter
// from re-running on every single keystroke.
export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    // Clear the pending timer if `value` changes before the delay is up.
    return () => clearTimeout(timer)
  }, [value, delay])

  return debounced
}
