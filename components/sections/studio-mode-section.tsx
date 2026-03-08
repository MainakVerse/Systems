'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Eye, Layers, Compass, BarChart3 } from 'lucide-react';

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

export function StudioModeSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Text */}
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

          {/* Right side - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <p className="text-muted-foreground font-medium">
                  Interactive Studio Mode Preview
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Explore, configure, and plan your deployment
                </p>
              </div>
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
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Workflow example */}
        <Card className="p-8 bg-gradient-to-r from-muted/50 to-muted/30 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6">How It Works</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Start', description: 'Choose your industry or use case' },
              { step: '2', title: 'Explore', description: 'Browse relevant systems and modules' },
              { step: '3', title: 'Configure', description: 'Select and customize your selection' },
              { step: '4', title: 'Plan', description: 'View scope, timeline, and resources' },
            ].map((item, index) => (
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
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to see what you can build?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 rounded-full px-8"
            >
              Try Studio Mode Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-border hover:bg-muted"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
