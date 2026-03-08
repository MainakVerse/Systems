'use client';

import { Card } from '@/components/ui/card';
import { Sparkles, BookOpen, Zap } from 'lucide-react';

const aiCapabilities = [
  {
    icon: BookOpen,
    title: 'Explain & Guide',
    description:
      'AI explains each module, how they interconnect, and best practices for your industry. Complex concepts made simple.',
    benefits: [
      'Interactive documentation',
      'Contextual help throughout',
      'Best practice recommendations',
    ],
  },
  {
    icon: Zap,
    title: 'Smart Configuration',
    description:
      'AI helps you configure workflows, automate repetitive tasks, and optimize your processes based on industry standards.',
    benefits: [
      'Workflow templates',
      'Auto-optimization',
      'Performance tuning',
    ],
  },
  {
    icon: Sparkles,
    title: 'Continuous Learning',
    description:
      'AI learns from your system usage patterns and suggests improvements, new modules, and efficiency gains over time.',
    benefits: [
      'Usage analytics',
      'Proactive suggestions',
      'Performance insights',
    ],
  },
];

export function AIGuidanceSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            AI That Helps You Run the System
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not hype. Practical AI assistance that makes complex systems accessible and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {aiCapabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <Card
                key={capability.title}
                className="p-8 bg-card border border-border hover:shadow-lg hover:border-primary/30 transition-all group"
              >
                <div className="mb-6">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {capability.title}
                  </h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {capability.description}
                </p>

                <div className="space-y-3">
                  <p className="text-xs font-semibold text-foreground">Key Capabilities</p>
                  {capability.benefits.map((benefit) => (
                    <div key={benefit} className="flex gap-3 items-start">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Real example */}
        <Card className="p-8 bg-primary/5 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-6">Real Example</h3>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                1
              </div>
              <div>
                <p className="font-semibold text-foreground">You:</p>
                <p className="text-muted-foreground">
                  "I need to automate our sales pipeline and notify managers when deals stall."
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                2
              </div>
              <div>
                <p className="font-semibold text-foreground">AI:</p>
                <p className="text-muted-foreground">
                  "I'll create a workflow that monitors deal status, calculates days-in-stage, and triggers notifications. Here's the template optimized for SaaS sales cycles..."
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                3
              </div>
              <div>
                <p className="font-semibold text-foreground">Result:</p>
                <p className="text-muted-foreground">
                  Your team gets real-time alerts for stalled deals. No coding. No manual configuration.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Emphasis */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI is a copilot, not the driver. You maintain full control, transparency, and ownership of your systems.
          </p>
        </div>
      </div>
    </section>
  );
}
