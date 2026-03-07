'use client'

import { useEffect, useRef } from 'react'

interface Wave {
  amplitude: number
  frequency: number
  speed: number
  yOffset: number
  alpha: number
  width: number
  phase: number
}

export function WavyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const waves: Wave[] = [
      { amplitude: 90,  frequency: 0.0025, speed: 0.40, yOffset: 0.25, alpha: 0.55, width: 2.0, phase: 0 },
      { amplitude: 55,  frequency: 0.0040, speed: 0.65, yOffset: 0.42, alpha: 0.35, width: 1.5, phase: 1.2 },
      { amplitude: 110, frequency: 0.0018, speed: 0.28, yOffset: 0.60, alpha: 0.28, width: 1.0, phase: 2.5 },
      { amplitude: 70,  frequency: 0.0050, speed: 0.85, yOffset: 0.35, alpha: 0.22, width: 1.0, phase: 0.8 },
      { amplitude: 130, frequency: 0.0022, speed: 0.35, yOffset: 0.72, alpha: 0.18, width: 1.5, phase: 3.1 },
      { amplitude: 45,  frequency: 0.0060, speed: 1.10, yOffset: 0.52, alpha: 0.15, width: 0.8, phase: 1.7 },
      { amplitude: 80,  frequency: 0.0030, speed: 0.50, yOffset: 0.85, alpha: 0.12, width: 1.2, phase: 4.2 },
    ]

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 180, 255, ${wave.alpha})`
        ctx.lineWidth = wave.width
        ctx.shadowColor = '#00b4ff'
        ctx.shadowBlur = 18

        for (let x = 0; x <= canvas.width; x += 1.5) {
          const y =
            canvas.height * wave.yOffset +
            Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude +
            Math.sin(x * wave.frequency * 0.45 + time * wave.speed * 1.4 + wave.phase) * wave.amplitude * 0.35

          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      })

      // Subtle horizontal energy lines
      ctx.shadowBlur = 6
      for (let i = 0; i < 3; i++) {
        const progress = ((time * 0.3 + i * 0.33) % 1)
        const y = canvas.height * (0.2 + progress * 0.6)
        const alpha = Math.sin(progress * Math.PI) * 0.08
        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 180, 255, ${alpha})`
        ctx.lineWidth = 0.5
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      time += 0.018
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.45 }}
    />
  )
}
