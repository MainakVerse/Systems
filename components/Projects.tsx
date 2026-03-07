'use client'

import React from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const projects = [
  {
    id: 1,
    title: 'Mission Control Dashboard',
    description:
      'Unified monitoring and management interface for all system operations, with live alerting and drill-down views.',
    tags: ['UI', 'Analytics', 'Real-time'],
    status: 'Active',
    statusColor: '#00b4ff',
  },
  {
    id: 2,
    title: 'Data Synchronization Engine',
    description:
      'High-throughput sync protocol handling multi-node data distribution with conflict resolution and audit trails.',
    tags: ['Backend', 'Infrastructure', 'Database'],
    status: 'Active',
    statusColor: '#00b4ff',
  },
  {
    id: 3,
    title: 'Predictive Optimization Layer',
    description:
      'ML-driven module that forecasts load patterns and pre-scales resources before demand spikes occur.',
    tags: ['AI/ML', 'Infra', 'Advanced'],
    status: 'Beta',
    statusColor: '#a855f7',
  },
]

export function Projects() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="py-28 bg-[#08080f] border-t border-[#111128]">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <p className="text-xs font-mono text-[#64748b] tracking-widest uppercase mb-3">Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
              Currently in progress.
            </h2>
          </div>
          <button className="btn-secondary self-start md:self-auto">
            View all projects →
          </button>
        </div>

        {/* Project list */}
        <div className="space-y-4">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="group border border-[#111128] rounded-lg p-6 bg-black hover:border-[#1a1a40] transition-colors duration-200"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, border-color 0.2s`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Title row */}
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-sm font-semibold text-white font-display">
                      {project.title}
                    </h3>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-full border"
                      style={{
                        color: project.statusColor,
                        borderColor: `${project.statusColor}33`,
                        backgroundColor: `${project.statusColor}0d`,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 border border-[#111128] text-[#64748b] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="btn-secondary text-xs shrink-0 self-start">
                  Open →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
