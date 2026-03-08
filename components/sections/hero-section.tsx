'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect, Fragment } from 'react';

const cyclingPhrases = ['You Own.', 'You Control.', 'You Scale.'];

export function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % cyclingPhrases.length);
        setFading(false);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Layer 1 — light grey grid */}
      <div className="hero-grid absolute inset-0 -z-20" />
      {/* Layer 3 — animated SVG waves */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* ── Left side waves ── */}
        {/* Left wave 1 — back, deep blue, slow rise */}
        <svg
          className="hero-side-l1 absolute left-0 top-0"
          style={{ width: '88px', height: '200%' }}
          viewBox="0 0 88 2000"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C82,0 82,250 0,500 C14,500 14,750 0,1000 C82,1000 82,1250 0,1500 C14,1500 14,1750 0,2000 L0,0 Z"
            fill="rgba(30,64,175,0.14)"
          />
        </svg>
        {/* Left wave 2 — front, lighter, faster fall */}
        <svg
          className="hero-side-l2 absolute left-0 top-0"
          style={{ width: '56px', height: '200%' }}
          viewBox="0 0 56 2000"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C52,0 52,250 0,500 C52,500 52,750 0,1000 C52,1000 52,1250 0,1500 C52,1500 52,1750 0,2000 L0,0 Z"
            fill="rgba(96,165,250,0.18)"
          />
        </svg>

        {/* ── Right side waves ── */}
        {/* Right wave 1 — back, deep blue, slow fall */}
        <svg
          className="hero-side-r1 absolute right-0 top-0"
          style={{ width: '88px', height: '200%' }}
          viewBox="0 0 88 2000"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M88,0 C6,0 6,250 88,500 C74,500 74,750 88,1000 C6,1000 6,1250 88,1500 C74,1500 74,1750 88,2000 L88,0 Z"
            fill="rgba(30,64,175,0.14)"
          />
        </svg>
        {/* Right wave 2 — front, lighter, faster rise */}
        <svg
          className="hero-side-r2 absolute right-0 top-0"
          style={{ width: '56px', height: '200%' }}
          viewBox="0 0 56 2000"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56,0 C4,0 4,250 56,500 C4,500 4,750 56,1000 C4,1000 4,1250 56,1500 C4,1500 4,1750 56,2000 L56,0 Z"
            fill="rgba(96,165,250,0.18)"
          />
        </svg>

        {/* ── Bottom horizontal waves ── */}
        {/* Wave 1 — back, slow */}
        <svg
          className="hero-wave-1 absolute bottom-0 w-[200%]"
          style={{ height: '65%' }}
          viewBox="0 0 2880 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,160 C240,60 480,260 720,160 C960,60 1200,260 1440,160 C1680,60 1920,260 2160,160 C2400,60 2640,260 2880,160 L2880,600 L0,600 Z"
            fill="rgba(186,230,253,0.45)"
          />
        </svg>

        {/* Wave 2 — mid, reverse */}
        <svg
          className="hero-wave-2 absolute bottom-0 w-[200%]"
          style={{ height: '50%' }}
          viewBox="0 0 2880 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,200 C240,100 480,300 720,200 C960,100 1200,300 1440,200 C1680,100 1920,300 2160,200 C2400,100 2640,300 2880,200 L2880,600 L0,600 Z"
            fill="rgba(147,197,253,0.30)"
          />
        </svg>

        {/* Wave 3 — front, fastest */}
        <svg
          className="hero-wave-3 absolute bottom-0 w-[200%]"
          style={{ height: '35%' }}
          viewBox="0 0 2880 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,240 C240,140 480,340 720,240 C960,140 1200,340 1440,240 C1680,140 1920,340 2160,240 C2400,140 2640,340 2880,240 L2880,600 L0,600 Z"
            fill="rgba(96,165,250,0.18)"
          />
        </svg>
      </div>

      {/* Heading + CTA — centered in the viewport, offset for header */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-20 pb-8 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Main heading */}
          <div className="space-y-0 mb-6">
            {/* Wordmark — Orbitron bold, no arch */}
            <div className="flex justify-center mb-2">
              <span
                style={{
                  fontFamily: 'var(--font-orbitron), sans-serif',
                  fontSize: 'clamp(3.5rem, 10vw, 8rem)',
                  fontWeight: 900,
                  letterSpacing: '0.02em',
                  lineHeight: 1,
                  color: '#0f172a',
                }}
              >
                6YSTEMS
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance text-foreground leading-tight">
              <span
                className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent inline-block"
                style={{
                  opacity: fading ? 0 : 1,
                  transform: fading ? 'translateY(12px)' : 'translateY(0)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                }}
              >
                {cyclingPhrases[phraseIndex]}
              </span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground/60">
                Not SaaS You Rent.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Modular AI-enabled systems built for ambitious growing companies. Deploy on your infrastructure. Own your data. No vendor lock-in.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            >
              Explore the 6 Systems
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-border hover:bg-muted"
            >
              Enter Studio Mode
            </Button>
          </div>
        </div>
      </div>

      {/* System diagram — below the fold */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="border-t border-border pt-12 flex justify-center">
          <svg
            viewBox="-260 -260 520 520"
            className="w-full max-w-140"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
              <filter id="ds" x="-25%" y="-25%" width="150%" height="150%">
                <feDropShadow dx="0" dy="2" stdDeviation="5" floodOpacity="0.13" />
              </filter>
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                return (
                  <path
                    key={i}
                    id={`cp${i}`}
                    d={`M${(62 * Math.cos(rad)).toFixed(2)},${(62 * Math.sin(rad)).toFixed(2)} L${(152 * Math.cos(rad)).toFixed(2)},${(152 * Math.sin(rad)).toFixed(2)}`}
                  />
                );
              })}
            </defs>

            {/* Connector lines */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={(62 * Math.cos(rad)).toFixed(2)}
                  y1={(62 * Math.sin(rad)).toFixed(2)}
                  x2={(152 * Math.cos(rad)).toFixed(2)}
                  y2={(152 * Math.sin(rad)).toFixed(2)}
                  stroke="rgba(99,102,241,0.28)"
                  strokeWidth="1.5"
                />
              );
            })}

            {/* Animated balls — 2 per connector */}
            {[0, 60, 120, 180, 240, 300].map((_, i) => (
              <Fragment key={i}>
                <circle r="4" fill="#818cf8" opacity="0.9">
                  <animateMotion dur="2s" repeatCount="indefinite" begin={`${-(i * 0.33).toFixed(2)}s`}>
                    <mpath href={`#cp${i}`} />
                  </animateMotion>
                </circle>
                <circle r="2.5" fill="#93c5fd" opacity="0.7">
                  <animateMotion dur="2s" repeatCount="indefinite" begin={`${-(i * 0.33 + 1).toFixed(2)}s`}>
                    <mpath href={`#cp${i}`} />
                  </animateMotion>
                </circle>
              </Fragment>
            ))}

            {/* Outer circles */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const labels = ['Manage', 'Booking', 'Records', 'Commerce', 'Comms', 'Intel'];
              const rad = (angle * Math.PI) / 180;
              const cx = (203 * Math.cos(rad)).toFixed(2);
              const cy = (203 * Math.sin(rad)).toFixed(2);
              return (
                <g key={i} filter="url(#ds)">
                  <circle cx={cx} cy={cy} r="50" fill="#f0f4ff" stroke="rgba(99,102,241,0.35)" strokeWidth="2" />
                  <text
                    x={cx} y={cy}
                    textAnchor="middle" dominantBaseline="middle"
                    fontSize="12" fontWeight="600" fill="#1e293b"
                    fontFamily="system-ui, -apple-system, sans-serif"
                  >
                    {labels[i]}
                  </text>
                </g>
              );
            })}

            {/* Center circle */}
            <g filter="url(#ds)">
              <circle cx="0" cy="0" r="62" fill="url(#cg)" />
              <image href="/favicon.png" x="-32" y="-32" width="64" height="64" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
