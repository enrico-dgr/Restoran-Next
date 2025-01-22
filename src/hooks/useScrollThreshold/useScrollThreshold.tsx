import { useEffect, useState } from 'react'

/**
 * @param threshold The scroll position to check for
 * @param axis The axis to check the scroll position
 */
export default function useScrollThreshold(
  threshold: number,
  axis: 'x' | 'y' = 'y'
) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = axis === 'y' ? window.scrollY : window.scrollX
      // About half of the navbar is not visible anymore,
      // so we put navbar as fixed
      setIsScrolled(scrollPosition > threshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold, axis])

  return isScrolled
}
