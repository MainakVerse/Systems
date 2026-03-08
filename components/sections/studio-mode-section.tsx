'use client';

import { useState, useEffect, Fragment } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Eye, Layers, Compass, BarChart3 } from 'lucide-react';

/* ── Data ──────────────────────────────────────────────────── */

const features = [
  {
    icon: Eye,
    title: 'Browse & Explore',
    description: 'Explore all available systems, modules, and capabilities without commitment.',
  },
  {
    icon: Layers,
    title: 'Select & Customize',
    description: 'Choose which systems and modules you need. Customize to your requirements.',
  },
  {
    icon: Compass,
    title: 'Preview Workflows',
    description: 'See how workflows will look and behave. Interactive previews of key processes.',
  },
  {
    icon: BarChart3,
    title: 'Estimate Scope',
    description: 'Get a clear breakdown of complexity, timeline, and resources needed.',
  },
];

const STEPS = [
  { icon: Eye,       label: 'Browse',   color: '#6366f1', status: 'Scanning available modules…' },
  { icon: Layers,    label: 'Select',   color: '#8b5cf6', status: 'Selecting components…' },
  { icon: Compass,   label: 'Preview',  color: '#a78bfa', status: 'Previewing workflows…' },
  { icon: BarChart3, label: 'Estimate', color: '#7c3aed', status: 'Estimating scope & timeline…' },
];

/* ── Mini step animations ──────────────────────────────────── */

function BrowseAnim() {
  const labels = ['Mgmt', 'Book', 'Records', 'Comm', 'AI', 'Commerce', 'Studio', 'Reports', 'Alerts', 'Users', 'Billing', 'Export'];
  return (
    <div className="grid grid-cols-4 gap-2 w-full">
      {labels.map((lbl, i) => (
        <div
          key={lbl}
          className="h-9 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center"
          style={{ animation: `studio-scan 1.8s ease-in-out ${i * 0.09}s infinite` }}
        >
          <span className="text-[9px] font-mono text-primary/70">{lbl}</span>
        </div>
      ))}
    </div>
  );
}

function SelectAnim() {
  const modules = ['Management System', 'Booking Module', 'AI Intelligence', 'Communications Hub'];
  return (
    <div className="flex flex-col gap-2 w-full max-w-[220px]">
      {modules.map((mod, i) => (
        <div key={mod} className="flex items-center gap-2.5 rounded-lg bg-primary/5 px-3 py-2">
          <div
            className="w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center"
            style={{ animation: `studio-check-bg 0.35s ease-out ${0.25 + i * 0.45}s both` }}
          >
            <svg
              width="9" height="7" viewBox="0 0 9 7" fill="none"
              style={{ animation: `studio-check-mark 0.25s ease-out ${0.45 + i * 0.45}s both`, opacity: 0 }}
            >
              <path d="M1 3.5l2.5 2.5L8 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[10px] text-foreground/70 leading-tight">{mod}</span>
        </div>
      ))}
    </div>
  );
}

function PreviewAnim() {
  const nodes = [
    { label: 'Trigger', sub: 'New booking' },
    { label: 'Process',  sub: 'Validate & assign' },
    { label: 'Notify',   sub: 'Send confirmation' },
  ];
  return (
    <div className="flex items-center gap-2 w-full">
      {nodes.map((node, i) => (
        <Fragment key={node.label}>
          <div
            className="flex-1 flex flex-col items-center gap-1"
            style={{ animation: `studio-node-appear 0.45s ease-out ${i * 0.55}s both` }}
          >
            <div
              className="w-12 h-12 rounded-xl border flex flex-col items-center justify-center gap-0.5"
              style={{
                background: `rgba(99,102,241,${0.08 + i * 0.04})`,
                borderColor: `rgba(99,102,241,0.3)`,
                animation: `studio-node-pulse 2s ease-in-out ${i * 0.55}s infinite`,
              }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
            </div>
            <span className="text-[9px] font-semibold text-foreground/80 text-center">{node.label}</span>
            <span className="text-[8px] text-muted-foreground text-center leading-tight">{node.sub}</span>
          </div>
          {i < 2 && (
            <div className="flex-shrink-0 flex flex-col items-center gap-0.5 mt-[-14px]">
              <div className="relative w-7 h-px bg-primary/15 overflow-hidden rounded-full">
                <div
                  className="absolute inset-0 bg-primary rounded-full"
                  style={{ animation: `studio-flow-line 0.4s ease-out ${i * 0.55 + 0.35}s both` }}
                />
              </div>
              <svg width="6" height="6" viewBox="0 0 6 6" className="text-primary/50" style={{ marginTop: -3 }}>
                <path d="M0 3h4M2 1l2 2-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

function EstimateAnim() {
  const bars = [
    { label: 'Mgmt',   pct: 72, color: '#6366f1' },
    { label: 'Book',   pct: 48, color: '#8b5cf6' },
    { label: 'AI',     pct: 88, color: '#a78bfa' },
    { label: 'Comm',   pct: 60, color: '#7c3aed' },
    { label: 'Studio', pct: 35, color: '#818cf8' },
  ];
  return (
    <div className="w-full flex flex-col gap-1">
      {bars.map((bar, i) => (
        <div key={bar.label} className="flex items-center gap-2">
          <span className="text-[9px] text-muted-foreground w-10 text-right flex-shrink-0">{bar.label}</span>
          <div className="flex-1 h-4 rounded bg-primary/8 overflow-hidden">
            <div
              className="h-full rounded"
              style={{
                width: `${bar.pct}%`,
                background: bar.color,
                opacity: 0.75,
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                animation: `studio-bar-grow 0.55s cubic-bezier(0.2,0,0.4,1) ${0.1 + i * 0.13}s forwards`,
              }}
            />
          </div>
          <span
            className="text-[9px] font-mono text-muted-foreground w-7 flex-shrink-0"
            style={{ animation: `studio-fade-in 0.3s ease-out ${0.55 + i * 0.13}s both` }}
          >
            {bar.pct}%
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Main preview widget ───────────────────────────────────── */

function StudioPreview() {
  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive(a => (a + 1) % 4);
      setTick(t => t + 1);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const step = STEPS[active];

  return (
    <div className="w-full h-full flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-primary/60">Studio Mode</span>
        <span className="flex items-center gap-1.5 text-[10px] text-emerald-500 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </span>
      </div>

      {/* Step pipeline */}
      <div className="flex items-center">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const isActive = i === active;
          const isPast   = i < active;
          return (
            <Fragment key={s.label}>
              <div className={`flex flex-col items-center gap-1 transition-all duration-500 ${isActive ? 'scale-[1.08]' : isPast ? '' : 'opacity-35'}`}>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-500"
                  style={{
                    background:  isActive ? `${s.color}22` : isPast ? `${s.color}0f` : 'rgba(99,102,241,0.05)',
                    border:      `1px solid ${isActive ? s.color + '60' : isPast ? s.color + '30' : 'rgba(99,102,241,0.12)'}`,
                    boxShadow:   isActive ? `0 0 14px ${s.color}44` : 'none',
                  }}
                >
                  <Icon className="w-4 h-4 transition-colors duration-500" style={{ color: isActive ? s.color : isPast ? s.color : 'rgba(99,102,241,0.4)' }} />
                </div>
                <span className={`text-[8px] font-medium transition-colors duration-500 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {s.label}
                </span>
              </div>
              {i < 3 && (
                <div
                  className="flex-1 mx-1 h-px transition-all duration-700"
                  style={{ background: isPast ? `${STEPS[i].color}88` : 'rgba(99,102,241,0.12)' }}
                />
              )}
            </Fragment>
          );
        })}
      </div>

      {/* Active simulation */}
      <div className="flex-1 rounded-xl border border-primary/15 bg-white/25 backdrop-blur-sm p-3 flex items-center justify-center overflow-hidden min-h-[120px]">
        {active === 0 && <BrowseAnim   key={`browse-${tick}`}   />}
        {active === 1 && <SelectAnim   key={`select-${tick}`}   />}
        {active === 2 && <PreviewAnim  key={`preview-${tick}`}  />}
        {active === 3 && <EstimateAnim key={`estimate-${tick}`} />}
      </div>

      {/* Progress + status */}
      <div className="space-y-1">
        <div className="h-1 rounded-full bg-primary/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-primary"
            style={{ width: `${((active + 1) / 4) * 100}%`, transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)' }}
          />
        </div>
        <p className="text-[9px] font-mono text-muted-foreground">{step.status}</p>
      </div>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────── */

export function StudioModeSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side – Text */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Explore Before You Build
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Studio Mode is an interactive environment where you can explore 6ystems without technical knowledge. Understand exactly what you'll get before implementing.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Zero technical requirement to explore',
                'Interactive system demonstrations',
                'Real-time scope & resource estimation',
                'Export your configuration plan',
              ].map((benefit) => (
                <div key={benefit} className="flex gap-3 items-start">
                  <span className="text-primary mt-1 font-bold">✓</span>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
            >
              Launch Studio Mode
            </Button>
          </div>

          {/* Right side – Animated preview */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20 h-96">
              <StudioPreview />
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-6 bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Workflow example */}
        <Card className="p-8 bg-gradient-to-r from-muted/50 to-muted/30 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Start',     description: 'Choose your industry or use case' },
              { step: '2', title: 'Explore',   description: 'Browse relevant systems and modules' },
              { step: '3', title: 'Configure', description: 'Select and customize your selection' },
              { step: '4', title: 'Plan',      description: 'View scope, timeline, and resources' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6 text-lg">Ready to see what you can build?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
              Try Studio Mode Now
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 border-border hover:bg-muted">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
