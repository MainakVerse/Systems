'use client';

import { Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

const solutions = [
  {
    icon: '🏗️',
    title: 'Modular Architecture',
    description: 'Pick only what you need. Build incrementally without bloat.',
  },
  {
    icon: '🔑',
    title: 'Own Your System',
    description: 'Full system source code and configuration stays with you.',
  },
  {
    icon: '☁️',
    title: 'Deploy Anywhere',
    description: 'Your cloud, your servers, your data center. You control the infrastructure.',
  },
  {
    icon: '🤖',
    title: 'AI-Assisted Workflows',
    description: 'AI helps configure, explain, and optimize your systems intelligently.',
  },
  {
    icon: '⚙️',
    title: 'Stable Long-term',
    description: "Systems don't break with vendor updates. You control the evolution.",
  },
  {
    icon: '💰',
    title: 'Predictable Costs',
    description: 'One-time investment. Pay for infrastructure, not per-user subscriptions.',
  },
];

/* ── Visual: Modular Architecture ──────────────────────────────
   4 blocks fly in from the corners and snap into a 2×2 grid.
   A green checkmark pulses on completion, then they scatter.
───────────────────────────────────────────────────────────────*/
function ModularVisual() {
  return (
    <svg viewBox="0 0 180 150" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes mv-tl{0%,100%{opacity:0;transform:translate(-38px,-32px)}20%,60%{opacity:1;transform:translate(0,0)}78%{opacity:0;transform:translate(-38px,-32px)}}
        @keyframes mv-tr{0%,100%{opacity:0;transform:translate(38px,-32px)}26%,60%{opacity:1;transform:translate(0,0)}78%{opacity:0;transform:translate(38px,-32px)}}
        @keyframes mv-bl{0%,100%{opacity:0;transform:translate(-38px,32px)}32%,60%{opacity:1;transform:translate(0,0)}78%{opacity:0;transform:translate(-38px,32px)}}
        @keyframes mv-br{0%,100%{opacity:0;transform:translate(38px,32px)}38%,60%{opacity:1;transform:translate(0,0)}78%{opacity:0;transform:translate(38px,32px)}}
        @keyframes mv-ring{0%,44%,78%,100%{opacity:0;transform:scale(0.94)}55%,68%{opacity:1;transform:scale(1)}}
        @keyframes mv-check{0%,50%,78%,100%{opacity:0;stroke-dashoffset:30}60%,72%{opacity:1;stroke-dashoffset:0}}
      `}</style>
      <g transform="translate(90,75)">
        <rect x="-38" y="-38" width="34" height="34" rx="5" fill="#6366f1"
          style={{animation:'mv-tl 4s ease-in-out infinite both'}}/>
        <rect x="4"   y="-38" width="34" height="34" rx="5" fill="#818cf8"
          style={{animation:'mv-tr 4s ease-in-out infinite both'}}/>
        <rect x="-38" y="4"   width="34" height="34" rx="5" fill="#a5b4fc"
          style={{animation:'mv-bl 4s ease-in-out infinite both'}}/>
        <rect x="4"   y="4"   width="34" height="34" rx="5" fill="#c7d2fe"
          style={{animation:'mv-br 4s ease-in-out infinite both'}}/>
        <rect x="-42" y="-42" width="84" height="84" rx="9" fill="none" stroke="#6366f1" strokeWidth="2.5"
          style={{animation:'mv-ring 4s ease-in-out infinite both'}}/>
        <path d="M-14,2 L-4,14 L16,-10" fill="none" stroke="#6366f1" strokeWidth="3.5"
          strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="30"
          style={{animation:'mv-check 4s ease-in-out infinite both'}}/>
      </g>
    </svg>
  );
}

/* ── Visual: Own Your System ────────────────────────────────────
   Phase 1: VENDOR box chains to YOUR DATA with a red padlock.
   Transition: chain snaps, padlock breaks.
   Phase 2: DATA box glows green with "YOU OWN IT" badge.
────────────────────────────────────────────────────────────────*/
function OwnershipVisual() {
  return (
    <svg viewBox="0 0 220 130" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes ov-phase1{0%,5%{opacity:1}45%,100%{opacity:0}}
        @keyframes ov-chain{0%,5%{opacity:1;stroke-dashoffset:0}35%{stroke-dashoffset:40}42%,100%{opacity:0}}
        @keyframes ov-phase2{0%,48%{opacity:0}58%,90%{opacity:1}100%{opacity:0}}
        @keyframes ov-glow{0%,48%{r:0;opacity:0}60%,85%{r:38;opacity:0.15}95%,100%{r:0;opacity:0}}
      `}</style>

      {/* ── PHASE 1: vendor dependency ── */}
      <g style={{animation:'ov-phase1 5s ease-in-out infinite both'}}>
        {/* VENDOR box */}
        <rect x="10" y="44" width="60" height="40" rx="7" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.8"/>
        <text x="40" y="61" textAnchor="middle" fontSize="8" fontWeight="700" fill="#ef4444"
          fontFamily="system-ui,sans-serif">VENDOR</text>
        <text x="40" y="75" textAnchor="middle" fontSize="11">🔒</text>
        {/* Chain */}
        <line x1="70" y1="64" x2="148" y2="64" stroke="#f87171" strokeWidth="2"
          strokeDasharray="6,4"
          style={{animation:'ov-chain 5s ease-in-out infinite both'}}/>
        {/* DATA box */}
        <rect x="148" y="44" width="60" height="40" rx="7" fill="#fff1f2" stroke="#fca5a5" strokeWidth="1.8"/>
        <text x="178" y="61" textAnchor="middle" fontSize="8" fontWeight="600" fill="#be123c"
          fontFamily="system-ui,sans-serif">YOUR DATA</text>
        <text x="178" y="75" textAnchor="middle" fontSize="11">⛓️</text>
      </g>

      {/* ── PHASE 2: you own it ── */}
      <g style={{animation:'ov-phase2 5s ease-in-out infinite both', opacity:0}}>
        {/* Glow ring */}
        <circle cx="110" cy="65" r="0" fill="#22c55e"
          style={{animation:'ov-glow 5s ease-in-out infinite both', opacity:0}}/>
        {/* Owned DATA box — centred */}
        <rect x="70" y="36" width="80" height="58" rx="10" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.2"/>
        <text x="110" y="57" textAnchor="middle" fontSize="8" fontWeight="700" fill="#15803d"
          fontFamily="system-ui,sans-serif">YOUR DATA</text>
        {/* Key icon */}
        <circle cx="103" cy="72" r="7" fill="none" stroke="#16a34a" strokeWidth="2.2"/>
        <line x1="110" y1="72" x2="122" y2="72" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round"/>
        <line x1="119" y1="72" x2="119" y2="77" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
        <line x1="115" y1="72" x2="115" y2="76" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
        {/* YOU OWN IT badge */}
        <rect x="72" y="100" width="76" height="18" rx="9" fill="#16a34a"/>
        <text x="110" y="113" textAnchor="middle" fontSize="8" fontWeight="700" fill="white"
          fontFamily="system-ui,sans-serif">✓ YOU OWN IT</text>
      </g>
    </svg>
  );
}

/* ── Visual: Deploy Anywhere ────────────────────────────────────
   An APP box pulses three connection beams outward — one to a
   cloud, one to a server rack, one to a building edge node.
   Each beam lights up in sequence.
────────────────────────────────────────────────────────────────*/
function DeployVisual() {
  return (
    <svg viewBox="0 0 220 150" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes dv-line1{0%,100%{stroke-dashoffset:60;opacity:0}8%,28%{stroke-dashoffset:0;opacity:1}38%{opacity:0}}
        @keyframes dv-dot1{0%,8%,38%,100%{opacity:0;transform:translate(0,0)}18%{opacity:1;transform:translate(-54px,-34px)}28%{opacity:0}}
        @keyframes dv-dest1{0%,25%,100%{opacity:0.25}32%,55%{opacity:1}65%{opacity:0.25}}
        @keyframes dv-line2{0%,20%,100%{stroke-dashoffset:60;opacity:0}28%,48%{stroke-dashoffset:0;opacity:1}58%{opacity:0}}
        @keyframes dv-dot2{0%,28%,58%,100%{opacity:0;transform:translate(0,0)}38%{opacity:1;transform:translate(-64px,30px)}48%{opacity:0}}
        @keyframes dv-dest2{0%,45%,100%{opacity:0.25}52%,72%{opacity:1;filter:none}82%{opacity:0.25}}
        @keyframes dv-line3{0%,40%,100%{stroke-dashoffset:60;opacity:0}48%,68%{stroke-dashoffset:0;opacity:1}78%{opacity:0}}
        @keyframes dv-dot3{0%,48%,78%,100%{opacity:0;transform:translate(0,0)}58%{opacity:1;transform:translate(58px,30px)}68%{opacity:0}}
        @keyframes dv-dest3{0%,65%,100%{opacity:0.25}72%,88%{opacity:1}95%{opacity:0.25}}
        @keyframes dv-app{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
      `}</style>

      {/* Center APP box */}
      <g transform="translate(110,75)">
        <rect x="-22" y="-18" width="44" height="36" rx="6" fill="#6366f1"
          style={{animation:'dv-app 3s ease-in-out infinite'}}/>
        <text x="0" y="6" textAnchor="middle" fontSize="9" fontWeight="700" fill="white"
          fontFamily="system-ui,sans-serif">APP</text>
      </g>

      {/* Path 1 → Cloud (top-left) */}
      <line x1="92" y1="62" x2="50" y2="36" stroke="#6366f1" strokeWidth="2" strokeDasharray="60"
        style={{animation:'dv-line1 4s ease-in-out infinite both'}}/>
      <circle cx="110" cy="75" r="5" fill="#818cf8"
        style={{animation:'dv-dot1 4s ease-in-out infinite both', opacity:0}}/>
      <g transform="translate(36,22)" style={{animation:'dv-dest1 4s ease-in-out infinite both'}}>
        <path d="M0,14 C0,14 -20,14 -20,2 C-20,-8 -12,-12 -4,-10 C-2,-18 12,-20 16,-12 C22,-12 26,-6 24,2 C22,8 16,14 16,14 Z"
          fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="0" y="26" textAnchor="middle" fontSize="7" fill="#1d4ed8" fontFamily="system-ui,sans-serif">Cloud</text>
      </g>

      {/* Path 2 → Server (bottom-left) */}
      <line x1="90" y1="85" x2="46" y2="112" stroke="#6366f1" strokeWidth="2" strokeDasharray="60"
        style={{animation:'dv-line2 4s ease-in-out infinite both'}}/>
      <circle cx="110" cy="75" r="5" fill="#818cf8"
        style={{animation:'dv-dot2 4s ease-in-out infinite both', opacity:0}}/>
      <g transform="translate(36,112)" style={{animation:'dv-dest2 4s ease-in-out infinite both'}}>
        <rect x="-18" y="-14" width="36" height="8" rx="2" fill="#d1fae5" stroke="#059669" strokeWidth="1.2"/>
        <rect x="-18" y="-4"  width="36" height="8" rx="2" fill="#d1fae5" stroke="#059669" strokeWidth="1.2"/>
        <rect x="-18" y="6"   width="36" height="8" rx="2" fill="#d1fae5" stroke="#059669" strokeWidth="1.2"/>
        <text x="0" y="22" textAnchor="middle" fontSize="7" fill="#065f46" fontFamily="system-ui,sans-serif">Server</text>
      </g>

      {/* Path 3 → Edge / Your premises (bottom-right) */}
      <line x1="130" y1="85" x2="172" y2="112" stroke="#6366f1" strokeWidth="2" strokeDasharray="60"
        style={{animation:'dv-line3 4s ease-in-out infinite both'}}/>
      <circle cx="110" cy="75" r="5" fill="#818cf8"
        style={{animation:'dv-dot3 4s ease-in-out infinite both', opacity:0}}/>
      <g transform="translate(182,112)" style={{animation:'dv-dest3 4s ease-in-out infinite both'}}>
        <rect x="-14" y="0" width="28" height="18" rx="2" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.2"/>
        <polygon points="-18,0 0,-14 18,0" fill="#fef3c7" stroke="#ca8a04" strokeWidth="1.2"/>
        <text x="0" y="28" textAnchor="middle" fontSize="7" fill="#92400e" fontFamily="system-ui,sans-serif">On-Prem</text>
      </g>
    </svg>
  );
}

/* ── Visual: AI-Assisted Workflows ──────────────────────────────
   Three workflow nodes (circles) sit in a line. A bright AI orb
   travels from left to right, turning each node from grey to
   glowing indigo as it passes.
────────────────────────────────────────────────────────────────*/
function AIWorkflowVisual() {
  return (
    <svg viewBox="0 0 220 110" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes av-orb{0%{transform:translateX(-70px);opacity:0}8%{opacity:1}33%{transform:translateX(0px);opacity:1}67%{transform:translateX(70px);opacity:1}76%{opacity:0}100%{transform:translateX(70px);opacity:0}}
        @keyframes av-n1{0%,5%,85%,100%{fill:#e5e7eb;stroke:#d1d5db}12%,80%{fill:#e0e7ff;stroke:#6366f1}}
        @keyframes av-n2{0%,30%,85%,100%{fill:#e5e7eb;stroke:#d1d5db}38%,80%{fill:#e0e7ff;stroke:#6366f1}}
        @keyframes av-n3{0%,58%,85%,100%{fill:#e5e7eb;stroke:#d1d5db}66%,80%{fill:#e0e7ff;stroke:#6366f1}}
        @keyframes av-spark{0%,8%,100%{opacity:0;transform:scale(0)}14%,30%{opacity:1;transform:scale(1)}36%{opacity:0}}
        @keyframes av-spark2{0%,33%,100%{opacity:0;transform:scale(0)}39%,55%{opacity:1;transform:scale(1)}61%{opacity:0}}
        @keyframes av-spark3{0%,60%,100%{opacity:0;transform:scale(0)}67%,80%{opacity:1;transform:scale(1)}86%{opacity:0}}
      `}</style>

      {/* Connector lines */}
      <line x1="80" y1="55" x2="104" y2="55" stroke="#e5e7eb" strokeWidth="2"/>
      <line x1="116" y1="55" x2="140" y2="55" stroke="#e5e7eb" strokeWidth="2"/>

      {/* Node 1 */}
      <circle cx="56" cy="55" r="22" strokeWidth="2"
        style={{animation:'av-n1 3.5s ease-in-out infinite both', fill:'#e5e7eb', stroke:'#d1d5db'}}/>
      <text x="56" y="51" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="system-ui,sans-serif">INPUT</text>
      <text x="56" y="62" textAnchor="middle" fontSize="14">📥</text>

      {/* Node 2 */}
      <circle cx="110" cy="55" r="22" strokeWidth="2"
        style={{animation:'av-n2 3.5s ease-in-out infinite both', fill:'#e5e7eb', stroke:'#d1d5db'}}/>
      <text x="110" y="51" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="system-ui,sans-serif">PROCESS</text>
      <text x="110" y="62" textAnchor="middle" fontSize="14">⚙️</text>

      {/* Node 3 */}
      <circle cx="164" cy="55" r="22" strokeWidth="2"
        style={{animation:'av-n3 3.5s ease-in-out infinite both', fill:'#e5e7eb', stroke:'#d1d5db'}}/>
      <text x="164" y="51" textAnchor="middle" fontSize="8" fill="#374151" fontFamily="system-ui,sans-serif">OUTPUT</text>
      <text x="164" y="62" textAnchor="middle" fontSize="14">✅</text>

      {/* Sparkles on each node */}
      <g transform="translate(56,32)" style={{animation:'av-spark 3.5s ease-in-out infinite both', opacity:0}}>
        <text fontSize="16" x="-8" y="0" fill="#f59e0b">✦</text>
      </g>
      <g transform="translate(110,32)" style={{animation:'av-spark2 3.5s ease-in-out infinite both', opacity:0}}>
        <text fontSize="16" x="-8" y="0" fill="#f59e0b">✦</text>
      </g>
      <g transform="translate(164,32)" style={{animation:'av-spark3 3.5s ease-in-out infinite both', opacity:0}}>
        <text fontSize="16" x="-8" y="0" fill="#f59e0b">✦</text>
      </g>

      {/* AI orb */}
      <g transform="translate(110,55)" style={{animation:'av-orb 3.5s ease-in-out infinite both'}}>
        <circle r="9" fill="#6366f1" opacity="0.9"/>
        <circle r="13" fill="#6366f1" opacity="0.2"/>
        <text x="0" y="4" textAnchor="middle" fontSize="10" fill="white">AI</text>
      </g>
    </svg>
  );
}

/* ── Visual: Stable Long-term ───────────────────────────────────
   Shield flat walls: left x=76 (y 44→72), right x=144 (y 44→72).
   Both UPDATE bolts travel at y=58 (mid flat-wall zone).
   Left tip: local x=50 → end translate(26,58) → SVG tip (76,58) ✓
   Right tip: local x=-50 → end translate(194,58) → SVG tip (144,58) ✓
   Shatter sparks at exact collision points (76,58) and (144,58).
   No SVG transform on animated <g> elements — positions baked into keyframes.
────────────────────────────────────────────────────────────────*/
function StabilityVisual() {
  return (
    <svg viewBox="0 0 220 130" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes sv-pulse { 0%,100%{opacity:1} 50%{opacity:0.85} }
        @keyframes sv-glow  { 0%,35%,100%{opacity:0} 42%,62%{opacity:0.22} 72%{opacity:0} }
        @keyframes sv-left  {
          0%,5%  { opacity:0; transform:translate(0px,58px) }
          10%    { opacity:1; transform:translate(0px,58px) }
          30%    { opacity:1; transform:translate(26px,58px) }
          35%    { opacity:0; transform:translate(26px,58px) }
          100%   { opacity:0; transform:translate(26px,58px) }
        }
        @keyframes sv-right {
          0%,5%  { opacity:0; transform:translate(220px,58px) }
          10%    { opacity:1; transform:translate(220px,58px) }
          30%    { opacity:1; transform:translate(194px,58px) }
          35%    { opacity:0; transform:translate(194px,58px) }
          100%   { opacity:0; transform:translate(194px,58px) }
        }
        @keyframes sv-sl    { 0%,30%,100%{opacity:0} 33%,47%{opacity:1} 52%{opacity:0} }
        @keyframes sv-sr    { 0%,30%,100%{opacity:0} 33%,47%{opacity:1} 52%{opacity:0} }
        @keyframes sv-check { 0%,35%,100%{opacity:0;stroke-dashoffset:30} 45%,72%{opacity:1;stroke-dashoffset:0} 82%{opacity:0} }
      `}</style>

      {/* Shield — only opacity pulses, no transform animation */}
      <path
        d="M110,28 L144,44 L144,72 C144,91 110,106 110,106 C110,106 76,91 76,72 L76,44 Z"
        fill="#e0e7ff" stroke="#6366f1" strokeWidth="2.5"
        style={{animation:'sv-pulse 2.5s ease-in-out infinite'}}/>
      {/* Green glow on impact */}
      <path
        d="M110,28 L144,44 L144,72 C144,91 110,106 110,106 C110,106 76,91 76,72 L76,44 Z"
        fill="#4ade80" stroke="none"
        style={{animation:'sv-glow 3.5s ease-in-out infinite', opacity:0}}/>
      <text x="110" y="62" textAnchor="middle" fontSize="8" fontWeight="700" fill="#4338ca"
        fontFamily="system-ui,sans-serif">YOUR</text>
      <text x="110" y="74" textAnchor="middle" fontSize="8" fontWeight="700" fill="#4338ca"
        fontFamily="system-ui,sans-serif">SYSTEM</text>
      {/* Checkmark draws after impact */}
      <path d="M101,83 L108,92 L121,75" fill="none" stroke="#4338ca" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round" strokeDasharray="30"
        style={{animation:'sv-check 3.5s ease-in-out infinite', opacity:0, strokeDashoffset:30}}/>

      {/* LEFT bolt — no SVG transform attribute */}
      <g style={{animation:'sv-left 3.5s ease-in-out infinite both'}}>
        <rect x="0" y="-8" width="42" height="16" rx="4" fill="#fee2e2" stroke="#f87171" strokeWidth="1.3"/>
        <text x="21" y="5" textAnchor="middle" fontSize="8" fill="#ef4444" fontWeight="700"
          fontFamily="system-ui,sans-serif">UPDATE</text>
        <polygon points="42,-5 50,0 42,5" fill="#f87171"/>
      </g>

      {/* RIGHT bolt — no SVG transform attribute */}
      <g style={{animation:'sv-right 3.5s ease-in-out infinite both'}}>
        <rect x="-42" y="-8" width="42" height="16" rx="4" fill="#fee2e2" stroke="#f87171" strokeWidth="1.3"/>
        <text x="-21" y="5" textAnchor="middle" fontSize="8" fill="#ef4444" fontWeight="700"
          fontFamily="system-ui,sans-serif">UPDATE</text>
        <polygon points="-42,-5 -50,0 -42,5" fill="#f87171"/>
      </g>

      {/* Shatter sparks — left wall at (76, 58) */}
      <g transform="translate(76,58)" style={{animation:'sv-sl 3.5s ease-in-out infinite', opacity:0}}>
        <line x1="0" y1="-12" x2="-9" y2="10" stroke="#f87171" strokeWidth="2"   strokeLinecap="round"/>
        <line x1="0" y1="-10" x2="8"  y2="8"  stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="0" y1="0"   x2="-13" y2="-3" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/>
      </g>

      {/* Shatter sparks — right wall at (144, 58) */}
      <g transform="translate(144,58)" style={{animation:'sv-sr 3.5s ease-in-out infinite', opacity:0}}>
        <line x1="0" y1="-12" x2="9"  y2="10" stroke="#f87171" strokeWidth="2"   strokeLinecap="round"/>
        <line x1="0" y1="-10" x2="-7" y2="8"  stroke="#fca5a5" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="0" y1="0"   x2="13" y2="-3" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"/>
      </g>
    </svg>
  );
}

/* ── Visual: Predictable Costs ──────────────────────────────────
   A simple chart: both a flat blue line (6ystems fixed cost) and
   a steep red line (SaaS per-user) draw from left to right.
   The growing gap shows the long-term saving.
────────────────────────────────────────────────────────────────*/
function CostVisual() {
  const flat = 'M20,90 L180,90';       // flat line
  const rising = 'M20,90 L180,20';      // rising line
  const flatLen = 160;
  const risingLen = 170;

  return (
    <svg viewBox="0 0 200 130" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes cv-flat{0%,10%{stroke-dashoffset:160}60%,100%{stroke-dashoffset:0}}
        @keyframes cv-rise{0%,10%{stroke-dashoffset:170}60%,100%{stroke-dashoffset:0}}
        @keyframes cv-label{0%,58%{opacity:0}65%,100%{opacity:1}}
        @keyframes cv-gap{0%,58%{opacity:0}65%,100%{opacity:0.12}}
      `}</style>

      {/* Axes */}
      <line x1="20" y1="14" x2="20" y2="100" stroke="#e2e8f0" strokeWidth="1.5"/>
      <line x1="18" y1="100" x2="190" y2="100" stroke="#e2e8f0" strokeWidth="1.5"/>
      <text x="12" y="104" textAnchor="middle" fontSize="7" fill="#94a3b8"
        fontFamily="system-ui,sans-serif">$</text>
      <text x="14" y="20" textAnchor="middle" fontSize="7" fill="#94a3b8"
        fontFamily="system-ui,sans-serif">↑</text>

      {/* Gap fill */}
      <path d="M20,90 L180,90 L180,20 Z" fill="#ef4444"
        style={{animation:'cv-gap 3s ease-in-out infinite both', opacity:0}}/>

      {/* Flat line — 6ystems */}
      <path d={flat} fill="none" stroke="#6366f1" strokeWidth="3" strokeLinecap="round"
        strokeDasharray={flatLen}
        style={{animation:'cv-flat 3s ease-in-out infinite both'}}/>

      {/* Rising line — SaaS */}
      <path d={rising} fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"
        strokeDasharray={risingLen}
        style={{animation:'cv-rise 3s ease-in-out infinite both'}}/>

      {/* Labels */}
      <g style={{animation:'cv-label 3s ease-in-out infinite both', opacity:0}}>
        <rect x="110" y="82" width="66" height="14" rx="3" fill="#e0e7ff"/>
        <text x="143" y="92" textAnchor="middle" fontSize="8" fill="#4338ca" fontWeight="700"
          fontFamily="system-ui,sans-serif">6ystems — fixed</text>
        <rect x="110" y="14" width="50" height="14" rx="3" fill="#fee2e2"/>
        <text x="135" y="24" textAnchor="middle" fontSize="8" fill="#dc2626" fontWeight="700"
          fontFamily="system-ui,sans-serif">SaaS — rising</text>
      </g>

      {/* X-axis labels */}
      {['Y1','Y2','Y3','Y4','Y5'].map((y, i) => (
        <text key={y} x={20 + i * 40} y="112" textAnchor="middle" fontSize="7" fill="#94a3b8"
          fontFamily="system-ui,sans-serif">{y}</text>
      ))}
    </svg>
  );
}

const visuals: Record<string, () => JSX.Element> = {
  'Modular Architecture':   ModularVisual,
  'Own Your System':        OwnershipVisual,
  'Deploy Anywhere':        DeployVisual,
  'AI-Assisted Workflows':  AIWorkflowVisual,
  'Stable Long-term':       StabilityVisual,
  'Predictable Costs':      CostVisual,
};

export function SolutionSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            A Better Way to Run Your Business Systems
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            6ystems transforms business software from a rental into an asset you own and control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => {
            const Visual = visuals[solution.title];
            const isActive = activeCard === solution.title;
            return (
              <Card
                key={solution.title}
                className="p-8 bg-linear-to-br from-card to-muted/30 border border-border hover:shadow-lg hover:border-primary/30 transition-all group relative overflow-hidden cursor-pointer select-none"
                onMouseEnter={() => setActiveCard(solution.title)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(isActive ? null : solution.title)}
              >
                {/* Original content */}
                <div style={{ opacity: isActive ? 0 : 1, transition: 'opacity 0.18s ease' }}>
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Visual overlay — white background */}
                <div
                  className="absolute inset-0 flex items-center justify-center p-4"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.18s ease',
                    pointerEvents: isActive ? 'auto' : 'none',
                    background: '#f8fafc',
                  }}
                >
                  {Visual && <Visual />}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Key advantages highlight */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Key Advantages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'No vendor lock-in constraints',
              'Full API and customization access',
              'Transparent pricing model',
              'Lifetime system ownership',
              'Complete data sovereignty',
              'Multi-deployment flexibility',
            ].map((advantage) => (
              <div key={advantage} className="flex gap-3 items-center">
                <Check className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
