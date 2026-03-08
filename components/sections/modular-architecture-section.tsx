'use client';

import { Card } from '@/components/ui/card';

const levels = [
  {
    title: 'Systems',
    description: 'Six core business systems',
    examples: ['Management', 'Booking', 'Records', 'Commercial', 'Communication', 'Intelligence'],
    color: 'bg-primary/10 border-primary/30',
  },
  {
    title: 'Subsystems',
    description: 'Functional areas within each system',
    examples: ['Inventory', 'Sales Pipeline', 'Payroll', 'Workflows', 'Dashboards', 'Automation Rules'],
    color: 'bg-accent/10 border-accent/30',
  },
  {
    title: 'Modules',
    description: 'Discrete, deployable capabilities',
    examples: ['Barcode Scanning', 'Lead Scoring', 'Tax Calculation', 'Task Routing', 'Forecasting', 'Classification'],
    color: 'bg-secondary/10 border-secondary/30',
  },
  {
    title: 'Components',
    description: 'Reusable building blocks',
    examples: ['Forms', 'Reports', 'APIs', 'Workflows', 'Integrations', 'Plugins'],
    color: 'bg-muted/30 border-border',
  },
];

export function ModularArchitectureSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Designed Like Building Blocks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every system is composed of layers you can mix and match. Build exactly what you need.
          </p>
        </div>

        {/* Hierarchical stack visualization */}
        <div className="space-y-4 mb-16">
          {levels.map((level, index) => (
            <div key={level.title}>
              <Card className={`${level.color} border p-8 hover:shadow-lg transition-shadow`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {level.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {level.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {level.examples.map((example) => (
                        <span
                          key={example}
                          className="px-3 py-1 text-sm bg-background text-foreground rounded-full border border-border"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-lg bg-background border-2 border-border text-xl font-bold text-foreground">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </Card>
              {index < levels.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="text-2xl text-muted-foreground">↓</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key principle */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Pick Only What You Need
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Start minimal. Add modules as your business evolves. Pay for what you deploy. Scale without bloat or unnecessary complexity.
          </p>
        </div>

        {/* Three column benefit grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              number: '1',
              title: 'Choose Your Scope',
              description: 'Select the systems and modules you need today. Skip the rest.',
            },
            {
              number: '2',
              title: 'Deploy Incrementally',
              description: 'Implement in phases. Master each system before expanding.',
            },
            {
              number: '3',
              title: 'Grow Without Limits',
              description: 'Add new systems and capabilities as your business scales.',
            },
          ].map((benefit) => (
            <Card key={benefit.number} className="p-6 bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary text-lg">{benefit.number}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
