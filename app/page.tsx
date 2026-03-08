import { HeroSection } from '@/components/sections/hero-section';
import { ProblemSection } from '@/components/sections/problem-section';
import { SolutionSection } from '@/components/sections/solution-section';
import { SixSystemsSection } from '@/components/sections/six-systems-section';
import { ModularArchitectureSection } from '@/components/sections/modular-architecture-section';
import { AIGuidanceSection } from '@/components/sections/ai-guidance-section';
import { StudioModeSection } from '@/components/sections/studio-mode-section';
import { OwnershipSection } from '@/components/sections/ownership-section';
import { EcosystemSection } from '@/components/sections/ecosystem-section';
import { CTASection } from '@/components/sections/cta-section';
import { FooterSection } from '@/components/sections/footer-section';

export default function Home() {
  return (
    <main className="overflow-hidden page-gradient">
      <section id="home"><HeroSection /></section>
      <section id="problem"><ProblemSection /></section>
      <section id="solution"><SolutionSection /></section>
      <section id="six-systems"><SixSystemsSection /></section>
      <section id="architecture"><ModularArchitectureSection /></section>
      <section id="ai-guidance"><AIGuidanceSection /></section>
      <section id="studio-mode"><StudioModeSection /></section>
      <section id="ownership"><OwnershipSection /></section>
      <section id="ecosystem"><EcosystemSection /></section>
      <section id="get-started"><CTASection /></section>
      <FooterSection />
    </main>
  );
}
