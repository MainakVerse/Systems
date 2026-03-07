'use client'

import { useEffect, useRef, useState } from 'react'

export function useMouseTilt() {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const x = e.clientX - rect.left - centerX
      const y = e.clientY - rect.top - centerY

      const rotateX = -(y / centerY) * 10
      const rotateY = (x / centerX) * 10

      setTilt({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return {
    ref,
    style: {
      transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      transition: 'transform 100ms ease-out',
    },
  }
}
