'use client';

import { Card } from '@/components/ui/card';
import { Lock, Package, BarChart } from 'lucide-react';

const ownership = [
  {
    icon: Lock,
    title: 'Client-Owned Systems',
    description:
      'Full ownership of your deployed systems. Your code, your configuration, your data. No SaaS terms to lock you in.',
    details: [
      'Source code in your repository',
      'Configuration under version control',
      'Full API documentation',
      'Unlimited customization rights',
    ],
  },
  {
    icon: Package,
    title: 'Deploy on Your Terms',
    description:
      'Your cloud. Your servers. Your data center. Choose your deployment infrastructure with complete flexibility.',
    details: [
      'AWS, Azure, Google Cloud, or private',
      'On-premise deployment option',
      'Multi-region deployment',
      'Hybrid cloud configurations',
    ],
  },
  {
    icon: BarChart,
    title: 'Predictable Maintenance',
    description:
      'One-time investment in your systems. Predictable maintenance costs with transparent resource requirements.',
    details: [
      'Infrastructure costs only',
      'No per-user licensing',
      'Transparent pricing model',
      'Scale with your business',
    ],
  },
];

export function OwnershipSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Build Once. Own Forever.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Invest in systems that compound in value. No recurring licensing. No vendor lock-in. Pure ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ownership.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="p-8 bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-3 border-t border-border pt-6">
                  {item.details.map((detail) => (
                    <div key={detail} className="flex gap-3">
                      <span className="text-primary font-bold">•</span>
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Comparison */}
        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            6ystems vs. Traditional SaaS
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Aspect</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">6ystems</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Traditional SaaS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Ownership', 'Yours forever', 'Vendor owns the software'],
                  ['Data Location', 'Your choice', 'Vendor servers'],
                  ['Customization', 'Unlimited', 'Limited to vendor features'],
                  ['Lock-in', 'None', 'High switching costs'],
                  ['Pricing Model', 'One-time infrastructure', 'Per-user monthly'],
                  ['Long-term Cost', 'Predictable and lower', 'Escalates with users'],
                  ['Deployment Options', 'Any infrastructure', 'SaaS only'],
                  ['Data Portability', 'Complete freedom', 'Vendor dependent'],
                ].map(([aspect, ours, saas]) => (
                  <tr key={aspect} className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="py-4 px-4 font-semibold text-foreground">{aspect}</td>
                    <td className="py-4 px-4 text-muted-foreground">{ours}</td>
                    <td className="py-4 px-4 text-muted-foreground">{saas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
