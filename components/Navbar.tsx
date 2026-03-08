'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'The Problem',  href: '#problem' },
  { label: 'The Solution', href: '#solution' },
  { label: '6 Systems',    href: '#six-systems' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'AI Guidance',  href: '#ai-guidance' },
  { label: 'Studio Mode',  href: '#studio-mode' },
  { label: 'Ownership',    href: '#ownership' },
  { label: 'Ecosystem',    href: '#ecosystem' },
  { label: 'Get Started',  href: '#get-started' },
]

const SYSTEMS_PAGE_LINKS = [
  { label: 'Home',            href: '/'        },
  { label: 'Privacy Policy',  href: '/privacy' },
  { label: 'Terms',           href: '/terms'   },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isSystemsPage = ['/systems-page', '/privacy', '/terms'].includes(pathname)

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleLink = (href: string) => {
    setOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 120)
  }

  return (
    <>
      {/* ── Trigger circle ───────────────────────────────── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="nav-trigger"
      >
        <span className={`nav-trigger-bar nav-trigger-bar--top${open ? ' nav-trigger-bar--open-top' : ''}`} />
        <span className={`nav-trigger-bar nav-trigger-bar--mid${open ? ' nav-trigger-bar--open-mid' : ''}`} />
        <span className={`nav-trigger-bar nav-trigger-bar--bot${open ? ' nav-trigger-bar--open-bot' : ''}`} />
      </button>

      {/* ── Backdrop ─────────────────────────────────────── */}
      <div
        className={`nav-backdrop${open ? ' nav-backdrop--on' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* ── Slide-out panel ──────────────────────────────── */}
      <nav className={`nav-panel${open ? ' nav-panel--open' : ''}`} aria-label="Site navigation">
        <p className="nav-panel-brand">6ystems</p>
        <ul className="nav-list">
          {isSystemsPage
            ? SYSTEMS_PAGE_LINKS.map(({ label, href }, i) => (
                <li key={href} className="nav-item" style={{ '--i': i } as React.CSSProperties}>
                  <Link
                    className="nav-link"
                    href={href}
                    onClick={() => setOpen(false)}
                  >
                    <span className="nav-link-num">0{i + 1}</span>
                    {label}
                  </Link>
                </li>
              ))
            : NAV_LINKS.map(({ label, href }, i) => (
                <li key={href} className="nav-item" style={{ '--i': i } as React.CSSProperties}>
                  <button
                    className="nav-link"
                    onClick={() => handleLink(href)}
                  >
                    <span className="nav-link-num">0{i + 1}</span>
                    {label}
                  </button>
                </li>
              ))
          }
        </ul>
      </nav>
    </>
  )
}
