'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(options?: {
  threshold?: number
  margin?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: options?.threshold || 0.1,
        rootMargin: options?.margin || '0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options?.threshold, options?.margin])

  return { ref, isVisible }
}
