'use client';

import { Card } from '@/components/ui/card';
import { TrendingUp, Users, Zap } from 'lucide-react';

const visions = [
  {
    icon: TrendingUp,
    title: 'Designed for Mid-Tier to Enterprise',
    description:
      'Not a platform for everyone. Built for companies with the sophistication and ambition to own their destiny. \$10M to \$1B+ ARR companies.',
  },
  {
    icon: Users,
    title: 'Systems Grow With Your Company',
    description:
      'Start with Management and Records. Add Commercial as revenue scales. Layer in Booking, Communication, and Intelligence as you grow.',
  },
  {
    icon: Zap,
    title: 'Long-term Partnerships',
    description:
      'We succeed when you succeed. Your growth trajectory determines our platform evolution. True alignment of interests.',
  },
];

export function EcosystemSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Built for Ambitious Growing Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            6ystems is engineered for organizations that are serious about their software strategy and willing to invest in long-term value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visions.map((vision) => {
            const Icon = vision.icon;
            return (
              <Card
                key={vision.title}
                className="p-8 bg-gradient-to-br from-card to-muted/30 border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="h-14 w-14 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {vision.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {vision.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Why this matters */}
        <Card className="mt-16 p-8 bg-primary/5 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Why This Matters
          </h3>

          <div className="space-y-6">
            {[
              {
                title: 'No Compromises',
                description:
                  'Every feature is designed with enterprise rigor. No shortcuts. No bloat. Just solid, reliable systems.',
              },
              {
                title: 'Aligned Incentives',
                description:
                  'We\'re not trying to maximize ARR through per-user fees. We invest in your long-term success because our success depends on it.',
              },
              {
                title: 'Sustainable Growth',
                description:
                  'Your systems improve over years, not quarters. We plan for decades. Technical debt is our enemy.',
              },
              {
                title: 'True Partnership',
                description:
                  'We work with you on your roadmap. Your feedback shapes our platform evolution. You have a voice.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20">
                    <span className="text-primary font-bold">→</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Target customer */}
        <div className="mt-12 text-center p-8 rounded-2xl border border-border bg-muted/50">
          <p className="text-lg font-semibold text-foreground mb-4">
            You're a fit if:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'You need sophisticated systems',
              'You want to own your technology',
              'Data sovereignty matters to you',
              'Long-term value over quick wins',
              'Willing to invest in excellence',
              'Want predictable costs',
            ].map((criterion) => (
              <span
                key={criterion}
                className="px-4 py-2 bg-background text-foreground rounded-full text-sm border border-border"
              >
                ✓ {criterion}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
