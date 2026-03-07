'use client'

import React, { useEffect, useRef } from 'react'

export function OrbitalDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    const centerX = width / 2
    const centerY = height / 2

    let animationFrameId: number

    const animate = (timestamp: number) => {
      ctx.fillStyle = 'rgba(2, 0, 8, 1)'
      ctx.fillRect(0, 0, width, height)

      const time = (timestamp % 8000) / 1000

      // Orbital paths
      ctx.strokeStyle = 'rgba(0, 180, 255, 0.15)'
      ctx.lineWidth = 1
      ;[80, 140, 200].forEach((radius) => {
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.stroke()
      })

      // Central node
      ctx.fillStyle = 'rgba(0, 180, 255, 1)'
      ctx.beginPath()
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2)
      ctx.fill()

      // Glow on central node
      const centralGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 28)
      centralGlow.addColorStop(0, 'rgba(0, 180, 255, 0.25)')
      centralGlow.addColorStop(1, 'rgba(0, 180, 255, 0)')
      ctx.fillStyle = centralGlow
      ctx.beginPath()
      ctx.arc(centerX, centerY, 28, 0, Math.PI * 2)
      ctx.fill()

      // Orbiting nodes
      const nodes = [
        { radius: 80, speed: 1, color: '#00b4ff' },
        { radius: 140, speed: 0.5, color: '#1a4bdd' },
        { radius: 200, speed: 0.3, color: '#7c3aed' },
      ]

      nodes.forEach((node) => {
        const angle = (time * node.speed * Math.PI * 2) / 360
        const x = centerX + Math.cos(angle) * node.radius
        const y = centerY + Math.sin(angle) * node.radius

        ctx.fillStyle = node.color
        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fill()

        // Trail ring
        ctx.strokeStyle = `rgba(0, 180, 255, 0.12)`
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.arc(x, y, 14, 0, Math.PI * 2)
        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={300}
      className="mx-auto"
    />
  )
}
