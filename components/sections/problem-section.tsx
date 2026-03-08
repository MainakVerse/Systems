'use client';

import { AlertCircle, Lock, Zap, TrendingUp, DollarSign, Database } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useState } from 'react';

type Step = { emoji: string; text: string; delay: number; punch?: boolean };

const problems: {
  icon: React.ElementType;
  title: string;
  description: string;
  steps: Step[];
}[] = [
  {
    icon: Zap,
    title: 'Forced Updates',
    description: "Vendor changes features without your input, disrupting your workflows.",
    steps: [
      { emoji: '😊', text: 'Your workflow runs smoothly', delay: 0 },
      { emoji: '⚡', text: 'Vendor ships a surprise update', delay: 150 },
      { emoji: '💥', text: 'Key features suddenly change', delay: 300 },
      { emoji: '😤', text: 'Productivity lost — again', delay: 450, punch: true },
    ],
  },
  {
    icon: TrendingUp,
    title: 'Feature Overload',
    description: "Pay for capabilities you don't need, cluttering your system.",
    steps: [
      { emoji: '🎯', text: 'You need 1 core feature', delay: 0 },
      { emoji: '📦', text: 'Package bundles 47 extras', delay: 150 },
      { emoji: '💸', text: 'You pay for all of it', delay: 300 },
      { emoji: '🤷', text: '80% sits unused every month', delay: 450, punch: true },
    ],
  },
  {
    icon: Lock,
    title: 'Vendor Lock-in',
    description: "Switching costs are prohibitive. You're stuck.",
    steps: [
      { emoji: '🤝', text: 'Great deal on day one', delay: 0 },
      { emoji: '📈', text: 'Data piles up in their system', delay: 150 },
      { emoji: '🔒', text: 'Switching costs keep climbing', delay: 300 },
      { emoji: '⛓️', text: "You can't leave. You're trapped.", delay: 450, punch: true },
    ],
  },
  {
    icon: DollarSign,
    title: 'Expensive Subscriptions',
    description: 'Per-user pricing scales unpredictably as you grow.',
    steps: [
      { emoji: '👤', text: '5 users → $50 / mo', delay: 0 },
      { emoji: '👥', text: '50 users → $500 / mo', delay: 150 },
      { emoji: '🏢', text: '200 users → $2,000 / mo', delay: 300 },
      { emoji: '😱', text: 'SaaS is eating your margin', delay: 450, punch: true },
    ],
  },
  {
    icon: AlertCircle,
    title: 'Limited Customization',
    description: 'Forced into SaaS limitations instead of building what you need.',
    steps: [
      { emoji: '🎨', text: 'You have a unique process', delay: 0 },
      { emoji: '📐', text: 'SaaS only fits one template', delay: 150 },
      { emoji: '🔁', text: 'You bend your process to theirs', delay: 300 },
      { emoji: '😞', text: 'You compromise. Always.', delay: 450, punch: true },
    ],
  },
  {
    icon: Database,
    title: 'Data Control',
    description: "Your critical data lives on someone else's servers.",
    steps: [
      { emoji: '📊', text: 'Your data lives on their servers', delay: 0 },
      { emoji: '🌐', text: 'Flows through third-party clouds', delay: 150 },
      { emoji: '🔓', text: 'Their ToS can change anytime', delay: 300 },
      { emoji: '🚫', text: "You don't really own it", delay: 450, punch: true },
    ],
  },
];

export function ProblemSection() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="py-20 bg-transparent">
      <style>{`
        @keyframes storyFadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes connectorGrow {
          from { transform: scaleY(0); opacity: 0; }
          to   { transform: scaleY(1); opacity: 1; }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Businesses Outgrow SaaS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The SaaS model was built for simplicity, not ambition. As your business grows, constraints become expensive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon;
            const isActive = activeCard === problem.title;

            return (
              <Card
                key={problem.title}
                className="p-6 bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all group relative overflow-hidden cursor-pointer select-none"
                onMouseEnter={() => setActiveCard(problem.title)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => setActiveCard(isActive ? null : problem.title)}
              >
                {/* Original card content */}
                <div
                  className="flex gap-4 items-start"
                  style={{ opacity: isActive ? 0 : 1, transition: 'opacity 0.18s ease' }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {problem.description}
                    </p>
                  </div>
                </div>

                {/* Story overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.18s ease',
                    pointerEvents: isActive ? 'auto' : 'none',
                    background: 'linear-gradient(140deg, #0f172a 0%, #1e1b4b 100%)',
                  }}
                >
                  <div className="h-full px-5 py-4 flex flex-col justify-center">
                    {/* Steps */}
                    {isActive && problem.steps.map((step, i) => (
                      <div key={i}>
                        <div
                          className="flex items-center gap-2.5"
                          style={{
                            opacity: 0,
                            animation: `storyFadeUp 0.32s ease ${step.delay + 80}ms forwards`,
                          }}
                        >
                          <span className="text-base leading-none w-5 text-center shrink-0">
                            {step.emoji}
                          </span>
                          <span
                            className="text-xs leading-snug"
                            style={{
                              color: step.punch ? '#fff' : '#cbd5e1',
                              fontWeight: step.punch ? 600 : 400,
                            }}
                          >
                            {step.text}
                          </span>
                          {step.punch && (
                            <span
                              className="ml-auto text-[9px] font-bold tracking-wide text-rose-400 uppercase"
                              style={{
                                opacity: 0,
                                animation: `storyFadeUp 0.3s ease ${step.delay + 220}ms forwards`,
                              }}
                            >
                              Pain point
                            </span>
                          )}
                        </div>

                        {/* Connector line */}
                        {i < problem.steps.length - 1 && (
                          <div
                            className="ml-2.25 w-px h-3 origin-top"
                            style={{
                              background: 'linear-gradient(to bottom, rgba(99,102,241,0.6), rgba(99,102,241,0.2))',
                              transform: 'scaleY(0)',
                              animation: `connectorGrow 0.18s ease ${step.delay + 180}ms forwards`,
                            }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
