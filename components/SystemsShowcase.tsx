'use client'

import React from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const modules = [
  {
    id: 1,
    name: 'Interface',
    description: 'Component library with consistent design tokens, accessible primitives, and smooth interactions out of the box.',
    accent: '#00b4ff',
  },
  {
    id: 2,
    name: 'Systems',
    description: 'Core runtime for managing parallel processes, task queues, and stateful data pipelines at any scale.',
    accent: '#1a4bdd',
  },
  {
    id: 3,
    name: 'Control',
    description: 'Real-time monitoring dashboards with alerting, audit logs, and granular permission controls.',
    accent: '#7c3aed',
  },
  {
    id: 4,
    name: 'Network',
    description: 'Encrypted communication layer with automatic failover, load balancing, and distributed tracing.',
    accent: '#a855f7',
  },
  {
    id: 5,
    name: 'Archive',
    description: 'Append-only data store with temporal queries, point-in-time recovery, and automatic compaction.',
    accent: '#38bdf8',
  },
  {
    id: 6,
    name: 'Nexus',
    description: 'Integration hub that connects every module and third-party service through a single unified API.',
    accent: '#00b4ff',
  },
]

export function SystemsShowcase() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="py-28 bg-black border-t border-[#111128]">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-mono text-[#64748b] tracking-widest uppercase mb-3">Modules</p>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
            Everything you need,{' '}
            <span style={{ color: '#00b4ff' }}>nothing you don't.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#111128]">
          {modules.map((mod, i) => (
            <div
              key={mod.id}
              className="bg-black p-8 group transition-colors duration-200 hover:bg-[#08080f]"
              style={{
                transitionDelay: isVisible ? `${i * 60}ms` : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.5s ease ${i * 60}ms, transform 0.5s ease ${i * 60}ms, background-color 0.2s`,
              }}
            >
              {/* Accent line */}
              <div
                className="w-8 h-0.5 mb-6 rounded-full"
                style={{ backgroundColor: mod.accent }}
              />
              <h3 className="text-base font-semibold text-white font-display mb-3">
                {mod.name}
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed">
                {mod.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
