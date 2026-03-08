'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function CTASection() {
  return (
    <section className="py-20 bg-transparent border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
          Build Your Business Systems with 6ystems
        </h2>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Stop renting your core business software. Own systems that scale with your ambition.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 font-semibold"
          >
            Start Exploring
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-10 font-semibold border-border hover:bg-background"
          >
            Talk to Our Team
          </Button>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Platform Overview', href: '#' },
            { label: 'Pricing', href: '#' },
            { label: 'Documentation', href: '#' },
            { label: 'Schedule Demo', href: '#' },
          ].map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              className="text-muted-foreground hover:text-foreground hover:bg-background/50"
              asChild
            >
              <a href={link.href}>{link.label}</a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
