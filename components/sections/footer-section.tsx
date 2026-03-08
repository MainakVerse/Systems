'use client';

import { Mail, Linkedin, Twitter } from 'lucide-react';

export function FooterSection() {
  return (
    <footer className="bg-foreground text-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">6ystems</h3>
            <p className="text-sm text-background/70 leading-relaxed">
              Business systems you own. Not SaaS you rent.
            </p>
            <p className="text-xs text-background/60 mt-4">
              Building the future of enterprise software.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              {['Overview', 'Six Systems', 'Studio Mode', 'Pricing', 'Documentation'].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-background/70 hover:text-background transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Blog', 'Careers', 'Contact', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/70 hover:text-background transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Data Security', 'Compliance'].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="text-background/70 hover:text-background transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} 6ystems, Inc. All rights reserved.
            </p>

            {/* Social */}
            <div className="flex gap-6">
              <a
                href="#"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>

            {/* Contact */}
            <p className="text-sm text-background/70">
              hello@6ystems.io
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
