'use client'

import React from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const features = [
  {
    label: 'Modular by design',
    description:
      'Each module operates independently. Deploy only what you need, upgrade without downtime, and replace any piece without touching the rest.',
    accent: '#00b4ff',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="1" stroke="#00b4ff" strokeWidth="1.5" />
        <rect x="12" y="2" width="6" height="6" rx="1" stroke="#00b4ff" strokeWidth="1.5" />
        <rect x="2" y="12" width="6" height="6" rx="1" stroke="#00b4ff" strokeWidth="1.5" />
        <rect x="12" y="12" width="6" height="6" rx="1" stroke="#00b4ff" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'Real-time data sync',
    description:
      'State propagates instantly across every layer. No polling, no stale reads — every client sees the same consistent view of your system.',
    accent: '#1a4bdd',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10h14M13 6l4 4-4 4" stroke="#1a4bdd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Built for scale',
    description:
      'Horizontal scaling is built in. Traffic spikes are absorbed automatically, and resource limits are configurable per module.',
    accent: '#7c3aed',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 16L10 4l6 12" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 11h7" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Typed API layer',
    description:
      'Every endpoint is schema-validated and fully typed. Generate client SDKs in any language from the same source of truth.',
    accent: '#a855f7',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 7l-3 3 3 3M15 7l3 3-3 3M11 4l-2 12" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export function Architecture() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="py-28 bg-[#08080f] border-t border-[#111128]">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <p className="text-xs font-mono text-[#64748b] tracking-widest uppercase mb-3">Architecture</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
            Designed for how
            <br />
            <span style={{ color: '#7c3aed' }}>real systems work.</span>
          </h2>
          <p className="text-[#64748b] leading-relaxed">
            Neat is built on a layered architecture where presentation, logic, and data
            are decoupled but communicate seamlessly.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={f.label}
              className="border border-[#111128] rounded-lg p-6 bg-black hover:border-[#1a1a40] transition-colors duration-200"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, border-color 0.2s`,
              }}
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-sm font-semibold text-white font-display mb-2">{f.label}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
