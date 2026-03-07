'use client'

import React from 'react'

const links = {
  Product: ['Features', 'Pricing', 'Security', 'Changelog'],
  Resources: ['Documentation', 'API Reference', 'Tutorials', 'Community'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#08080f] border-t border-[#111128]">
      <div className="container mx-auto px-6 max-w-5xl py-16">

        {/* Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-white font-bold font-display text-lg mb-3" style={{ color: '#00b4ff' }}>
              Neat
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed max-w-xs">
              The professional interface platform for modern engineering teams.
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="text-xs font-mono text-[#64748b] uppercase tracking-widest mb-4">{section}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[#64748b] hover:text-white transition-colors duration-150"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#111128]">
          <p className="text-xs text-[#64748b] font-mono">
            © {year} Neat, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {['Twitter', 'GitHub', 'Discord'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-[#64748b] hover:text-white transition-colors duration-150 font-mono"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
