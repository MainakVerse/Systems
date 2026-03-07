import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Zap, Boxes, Brain, Rocket, ChevronRight } from 'lucide-react';
import { WavyBackground } from '@/components/WavyBackground';
import { TypewriterText } from '@/components/TypewriterText';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Navigation */}
      <nav className="border-b border-[#1a1a1a] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">Systems</div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#products" className="text-[#888] hover:text-white transition">Products</a>
            <a href="#features" className="text-[#888] hover:text-white transition">Features</a>
            <a href="#showcase" className="text-[#888] hover:text-white transition">Showcase</a>
            <a href="https://github.com" className="text-[#888] hover:text-white transition flex items-center gap-2">
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-32 md:pt-20 md:pb-44 border-b border-[#1a1a1a] overflow-hidden min-h-screen flex items-center">
        {/* Animated wavy neon background */}
        <WavyBackground />

        {/* Dark radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.85) 75%)',
          }}
        />

        {/* Grid overlay */}
        <div className="absolute inset-0 hero-grid pointer-events-none z-[1]" />

        {/* Top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none z-[1]"
          style={{
            background: 'radial-gradient(ellipse, rgba(0,180,255,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10 w-full flex flex-col items-center text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 border border-[#00b4ff]/25 bg-[#00b4ff]/5 rounded-full px-4 py-1.5 mb-10 backdrop-blur-sm">
            <span
              className="w-2 h-2 rounded-full bg-[#00b4ff] flex-shrink-0"
              style={{ animation: 'pulse-dot 2s ease-in-out infinite', boxShadow: '0 0 8px #00b4ff' }}
            />
            <span className="text-xs text-[#00b4ff] tracking-widest uppercase font-semibold">
              Platform v2.0 — Generally Available
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.95] mb-6">
            <span className="text-white block">Build Systems,</span>
            <span
              className="px-2 py-1 inline-block bg-gradient-to-r from-[#00b4ff] to-[#0077cc] text-transparent bg-clip-text"
              style={{ letterSpacing: '0.02em' }}
            >
              Not Problems.
            </span>
          </h1>

          {/* Typewriter line */}
          <div className="flex items-center justify-center gap-2 mb-10 h-7">
            <span className="text-[#00b4ff]/40 text-sm font-semibold tracking-widest select-none">&gt;&gt;</span>
            <TypewriterText
              texts={[
                'Scaffolding intelligent systems at the edge...',
                'Zero complexity. Maximum engineering focus.',
                'Ship production-ready systems in hours.',
                'AI-powered workflows. Human-scale control.',
                'Built for engineers who actually ship.',
              ]}
              className="text-sm text-[#00b4ff]/80 tracking-wide font-semibold"
              speed={70}
              deleteSpeed={30}
              pauseDuration={2000}
            />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button
              className="h-13 px-9 text-sm font-bold tracking-widest uppercase border-none rounded-lg transition-all"
              style={{
                background: 'linear-gradient(135deg, #00b4ff, #0077cc)',
                color: '#000',
                boxShadow: '0 0 20px rgba(0,180,255,0.4), 0 0 40px rgba(0,180,255,0.15)',
              }}
            >
              Get Started Free <ArrowRight className="ml-2" size={16} />
            </Button>
            <Button
              variant="outline"
              className="h-13 px-9 text-sm font-bold tracking-widest uppercase rounded-lg transition-all bg-transparent"
              style={{
                borderColor: 'rgba(0,180,255,0.4)',
                color: '#00b4ff',
                boxShadow: '0 0 12px rgba(0,180,255,0.1)',
              }}
            >
              View Documentation
            </Button>
          </div>

        </div>
      </section>

      {/* Systems / Products Section */}
      <section id="products" className="px-6 py-24 border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight">Systems</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Frontend',
                description: 'Modern web interfaces built for speed and scalability',
                tags: ['React', 'Next.js', 'TypeScript']
              },
              {
                name: 'API Layer',
                description: 'RESTful and GraphQL APIs with zero overhead',
                tags: ['Node.js', 'Express', 'GraphQL']
              },
              {
                name: 'Database',
                description: 'Reliable data persistence with intelligent caching',
                tags: ['PostgreSQL', 'Redis', 'Vector DB']
              },
              {
                name: 'AI Co-Pilot',
                description: 'Intelligent suggestions and automated workflows',
                tags: ['LLM', 'RAG', 'Embeddings']
              },
              {
                name: 'Infrastructure',
                description: 'Cloud-native deployment with auto-scaling',
                tags: ['Docker', 'Kubernetes', 'AWS']
              },
              {
                name: 'Monitoring',
                description: 'Real-time observability and performance metrics',
                tags: ['Prometheus', 'Grafana', 'Logs']
              }
            ].map((system, idx) => (
              <div
                key={idx}
                className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6 hover:border-[#00aaff] hover:shadow-[0_0_20px_rgba(0,170,255,0.1)] transition-all group"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#00aaff] transition">{system.name}</h3>
                <p className="text-[#888] text-sm mb-4 leading-relaxed">{system.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {system.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-mono bg-[#1a1a1a] text-[#00aaff] px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-[#00aaff] text-sm font-semibold hover:gap-1 flex items-center gap-0.5 transition">
                  Explore <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="px-6 py-24 border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight">Architecture</h2>
          <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
              <div className="flex-1 text-center">
                <div className="bg-[#1a1a1a] rounded-lg p-6 mb-2">
                  <span className="font-mono text-[#00aaff] font-semibold">Frontend</span>
                </div>
                <p className="text-[#888] text-sm">React/Next.js</p>
              </div>

              <div className="hidden md:flex items-center justify-center w-12">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#00aaff]"></div>
                <div className="w-3 h-3 rounded-full border border-[#00aaff] mx-2"></div>
              </div>

              <div className="flex-1 text-center">
                <div className="bg-[#1a1a1a] rounded-lg p-6 mb-2">
                  <span className="font-mono text-[#00aaff] font-semibold">API</span>
                </div>
                <p className="text-[#888] text-sm">Node.js/Express</p>
              </div>

              <div className="hidden md:flex items-center justify-center w-12">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#00aaff] to-transparent"></div>
                <div className="w-3 h-3 rounded-full border border-[#00aaff] mx-2"></div>
              </div>

              <div className="flex-1 text-center">
                <div className="bg-[#1a1a1a] rounded-lg p-6 mb-2">
                  <span className="font-mono text-[#00aaff] font-semibold">Database</span>
                </div>
                <p className="text-[#888] text-sm">PostgreSQL</p>
              </div>

              <div className="hidden md:flex items-center justify-center w-12">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#00aaff]"></div>
                <div className="w-3 h-3 rounded-full border border-[#00aaff] mx-2"></div>
              </div>

              <div className="flex-1 text-center">
                <div className="bg-[#1a1a1a] rounded-lg p-6 mb-2">
                  <span className="font-mono text-[#00aaff] font-semibold">AI</span>
                </div>
                <p className="text-[#888] text-sm">LLM Integration</p>
              </div>

              <div className="hidden md:flex items-center justify-center w-12">
                <div className="w-8 h-0.5 bg-gradient-to-r from-[#00aaff] to-transparent"></div>
                <div className="w-3 h-3 rounded-full border border-[#00aaff] mx-2"></div>
              </div>

              <div className="flex-1 text-center">
                <div className="bg-[#1a1a1a] rounded-lg p-6 mb-2">
                  <span className="font-mono text-[#00aaff] font-semibold">Deploy</span>
                </div>
                <p className="text-[#888] text-sm">Cloud Native</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight">Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: 'Rapid Scaffolding',
                description: 'Generate complete systems in seconds. Pre-built templates and intelligent defaults get you shipping faster.'
              },
              {
                icon: Boxes,
                title: 'Modular Architecture',
                description: 'Clean separation of concerns. Pick and choose what you need. Plug components together without friction.'
              },
              {
                icon: Brain,
                title: 'AI Co-Pilot',
                description: 'Intelligent code suggestions and automated workflows. Your systems learn from patterns and improve.'
              },
              {
                icon: Rocket,
                title: 'Shared Infrastructure',
                description: 'Deploy once, scale everywhere. Unified infrastructure across all your systems with zero configuration.'
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-8 hover:border-[#00aaff] transition-colors">
                  <Icon className="text-[#00aaff] mb-4" size={28} />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-[#888] leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="px-6 py-24 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight">Workflow</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {['Idea', 'Design', 'Build', 'Deploy', 'Iterate'].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 w-full md:w-auto">
                <div className="bg-[#00aaff] text-black rounded-full w-12 h-12 flex items-center justify-center font-semibold flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="md:text-center flex-1 md:flex-initial">
                  <p className="font-semibold">{step}</p>
                </div>
                {idx < 4 && (
                  <ChevronRight className="text-[#00aaff] hidden md:block" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="px-6 py-24 border-b border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 tracking-tight">Showcase</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Real-time Dashboard',
                snippet: 'const metrics = await db\n  .query(\'SELECT * FROM events\')\n  .stream()',
                tags: ['Next.js', 'WebSocket', 'PostgreSQL']
              },
              {
                name: 'AI Content Generator',
                snippet: 'const content = await ai\n  .generate({\n    prompt: userInput\n  })',
                tags: ['LLM', 'Streaming', 'React']
              },
              {
                name: 'Payment Pipeline',
                snippet: 'await payments\n  .process(order)\n  .withRetry(3)\n  .notify()',
                tags: ['Stripe', 'Error Handling', 'Queues']
              },
              {
                name: 'Multi-tenant API',
                snippet: 'router.use(auth)\n  .use(tenantResolver)\n  .route(\'/api/v1\')',
                tags: ['Express', 'Middleware', 'Auth']
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#00aaff] transition-colors">
                <div className="p-6 border-b border-[#1a1a1a]">
                  <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                  <div className="bg-[#080808] rounded p-4 font-mono text-sm text-[#888] overflow-x-auto mb-4">
                    <pre>{project.snippet}</pre>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-mono bg-[#1a1a1a] text-[#00aaff] px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 border-b border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
            Ready to build?
          </h2>
          <Button className="bg-[#00aaff] text-black hover:bg-[#0099dd] font-semibold h-12 px-12 rounded-lg transition border-none text-lg">
            Start Building Now <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-lg mb-4">Systems</h4>
              <p className="text-[#888] text-sm">Build modern systems with confidence.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-sm text-[#888]">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Docs</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Community</h5>
              <ul className="space-y-2 text-sm text-[#888]">
                <li><a href="#" className="hover:text-white transition">Discord</a></li>
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm text-[#888]">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#888] text-sm">© 2024 Systems. All rights reserved.</p>
            <a href="https://github.com" className="text-[#888] hover:text-white transition flex items-center gap-2">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
