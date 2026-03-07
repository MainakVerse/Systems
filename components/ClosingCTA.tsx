'use client'

import React from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function ClosingCTA() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className="py-36 bg-black border-t border-[#111128] relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-96 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 max-w-3xl relative z-10 text-center">
        <div
          style={{
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p className="text-xs font-mono text-[#64748b] tracking-widest uppercase mb-6">Get started</p>

          <h2 className="text-4xl md:text-5xl font-bold font-display text-white leading-tight mb-6">
            Ready to ship
            <br />
            <span style={{ color: '#00b4ff' }}>faster?</span>
          </h2>

          <p className="text-[#64748b] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Join teams already building with Neat. Free to start, no credit card required.
            Scale when you're ready.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <button className="btn-primary px-8 py-3 text-sm">
              Get started free
            </button>
            <button className="btn-secondary px-8 py-3 text-sm">
              Talk to sales
            </button>
          </div>

          {/* Social proof */}
          <div className="pt-10 border-t border-[#111128]">
            <p className="text-xs text-[#64748b] font-mono tracking-widest uppercase mb-6">
              Trusted by engineering teams at
            </p>
            <div className="flex items-center justify-center gap-10 flex-wrap">
              {['Acme Corp', 'Globex', 'Initech'].map((co) => (
                <span key={co} className="text-sm text-[#64748b] font-mono opacity-50">
                  {co}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
