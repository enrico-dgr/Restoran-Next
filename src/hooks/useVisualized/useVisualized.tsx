'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function useVisualized() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  const [visualized, setVisualized] = useState(false)

  useEffect(() => {
    if (inView) {
      setVisualized(inView)
    }
  }, [inView])

  return { ref, visualized }
}
