import { useEffect, useMemo, useState } from 'react'
import './ContentLoadingSpinner.scss'

export default function ContentLoadingSpinner() {
  const [contentLoaded, setContentLoaded] = useState(false)

  useEffect(() => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () =>
        setContentLoaded(true)
      )
    } else {
      setContentLoaded(true)
    }
  }, [])

  const spinnerWrapClass = useMemo(() => {
    let className =
      'bg-white w-100 vh-100'

    if (!contentLoaded) {
      className += ' show'
    }

    return className
  }, [contentLoaded])

  return (
    <div id="spinner" className={spinnerWrapClass}>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
