'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const systems = [
  {
    id: 'management',
    name: 'Management Systems',
    subtitle: 'Operations & Oversight',
    description: 'Coordinate teams, projects, tasks, and resources across your entire organisation.',
    icon: '🗂️',
    color: 'from-blue-400 to-blue-600',
    details: [
      'Task & project management',
      'Resource allocation',
      'Team coordination',
      'Process oversight',
    ],
  },
  {
    id: 'booking',
    name: 'Booking Systems',
    subtitle: 'Scheduling & Reservations',
    description: 'Manage appointments, bookings, and reservations with automated reminders.',
    icon: '📅',
    color: 'from-purple-400 to-purple-600',
    details: [
      'Appointment scheduling',
      'Reservation management',
      'Automated reminders',
      'Availability sync',
    ],
  },
  {
    id: 'records',
    name: 'Record Systems',
    subtitle: 'Data & Documentation',
    description: 'Centralise and secure all business records, documents, and critical operational data.',
    icon: '🗄️',
    color: 'from-green-400 to-green-600',
    details: [
      'Document management',
      'Audit trails',
      'Secure storage',
      'Fast data retrieval',
    ],
  },
  {
    id: 'commercial',
    name: 'Commercial Systems',
    subtitle: 'Sales & Revenue',
    description: 'Drive revenue through sales pipelines, invoicing, contracts, and customer account management.',
    icon: '💼',
    color: 'from-orange-400 to-orange-600',
    details: [
      'Sales pipeline',
      'Invoicing & billing',
      'Contract management',
      'Customer accounts',
    ],
  },
  {
    id: 'communication',
    name: 'Communication Systems',
    subtitle: 'Messaging & Collaboration',
    description: 'Unified communications across teams, clients, and channels — all in one owned platform.',
    icon: '💬',
    color: 'from-red-400 to-red-600',
    details: [
      'Team messaging',
      'Client portals',
      'Email automation',
      'Notification management',
    ],
  },
  {
    id: 'intelligence',
    name: 'Intelligence Systems',
    subtitle: 'AI & Analytics',
    description: 'Turn your data into decisions with AI-powered analytics, dashboards, and predictive insights.',
    icon: '🧠',
    color: 'from-pink-400 to-pink-600',
    details: [
      'Real-time dashboards',
      'Predictive analytics',
      'AI automation',
      'Custom reporting',
    ],
  },
];

export function SixSystemsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
            Six Universal Systems Power Every Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every growing business needs these core systems. 6ystems provides them as modular, integrated components.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {systems.map((system) => (
            <Card
              key={system.id}
              className="p-4 bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group"
              onClick={() => setExpandedId(expandedId === system.id ? null : system.id)}
            >
              <div className="mb-2 flex items-center gap-3">
                <div className="text-3xl leading-none">{system.icon}</div>
                <div>
                  <h3 className="text-base font-bold text-foreground leading-tight">{system.name}</h3>
                  <p className="text-xs text-primary font-semibold">{system.subtitle}</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-2 text-sm leading-relaxed">
                {system.description}
              </p>

              {expandedId === system.id && (
                <div className="border-t border-border pt-3 animate-in fade-in">
                  <p className="text-xs font-semibold text-foreground mb-2">Key Modules:</p>
                  <ul className="space-y-1">
                    {system.details.map((detail) => (
                      <li key={detail} className="flex gap-2 text-xs text-muted-foreground">
                        <span className="text-primary">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button
                variant="ghost"
                size="sm"
                className="mt-2 gap-2 w-full group-hover:bg-primary/10 text-primary h-8 text-xs"
              >
                {expandedId === system.id ? 'Show less' : 'Learn more'}
                <ChevronRight className="h-3 w-3" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-6 bg-muted/50 border border-border rounded-2xl p-6 text-center">
          <p className="text-muted-foreground mb-6">
            All six systems work together seamlessly through a unified data model and API.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8" asChild>
            <Link href="/systems-page">Explore Integration Architecture</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
