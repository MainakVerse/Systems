'use client'

import React, { useEffect, useState } from 'react'

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<12ms', label: 'Avg. latency' },
  { value: '6', label: 'Core modules' },
]

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Subtle ambient glows */}
      <div
        className="absolute -top-60 -left-60 w-175 h-175 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-60 -right-60 w-150 h-150 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,180,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 py-32">
        <div
          style={{
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 border border-[#111128] rounded-full px-3 py-1 mb-10">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#00b4ff] inline-block"
              style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
            />
            <span className="text-xs text-[#64748b] font-mono tracking-wide">
              Platform v2.0 — Generally Available
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.08] mb-6 text-white">
            The modern interface
            <br />
            <span style={{ color: '#00b4ff' }}>platform for teams.</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-[#64748b] leading-relaxed max-w-2xl mb-10">
            Neat gives engineering teams a unified system for building, monitoring, and shipping
            at scale — with full control and zero lock-in.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-24">
            <button className="btn-primary">Get started free</button>
            <button className="btn-secondary">View documentation →</button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#111128] max-w-sm">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white font-display">{stat.value}</div>
                <div className="text-xs text-[#64748b] font-mono mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
