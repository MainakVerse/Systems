'use client'

import React from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Connect your stack',
    description:
      'Point Neat at your existing infrastructure. Supports AWS, GCP, Azure, Kubernetes, and bare metal out of the box.',
  },
  {
    number: '02',
    title: 'Configure modules',
    description:
      'Enable the modules your team needs. Each one is independently configurable through a declarative YAML or UI editor.',
  },
  {
    number: '03',
    title: 'Deploy in minutes',
    description:
      'Push a single command. Neat handles provisioning, health checks, and rollout strategy automatically.',
  },
  {
    number: '04',
    title: 'Monitor everything',
    description:
      'Get structured logs, distributed traces, and live metrics for every module — all in one place.',
  },
  {
    number: '05',
    title: 'Iterate with confidence',
    description:
      'Feature flags, staged rollouts, and automatic rollback keep your system stable as you move fast.',
  },
]

export function Workflow() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="py-28 bg-black border-t border-[#111128]">
      <div className="container mx-auto px-6 max-w-5xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — header */}
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-mono text-[#64748b] tracking-widest uppercase mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              From zero to
              <br />
              <span style={{ color: '#00b4ff' }}>production in five steps.</span>
            </h2>
            <p className="text-[#64748b] leading-relaxed">
              Neat is designed to integrate with your existing workflow, not replace it.
              Most teams are live within the same day.
            </p>
          </div>

          {/* Right — steps */}
          <div className="space-y-0 divide-y divide-[#111128]">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="py-6 flex gap-6"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(16px)',
                  transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
                }}
              >
                <span className="text-xs font-mono text-[#64748b] mt-0.5 shrink-0 w-6">{step.number}</span>
                <div>
                  <h3 className="text-sm font-semibold text-white font-display mb-1">{step.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
