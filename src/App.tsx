import ContactSection from "./ContactSection";
import CoverageStrip from "./CoverageStrip";
import FogHero from "./FogHero";
import ProjectEvidence from "./ProjectEvidence";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-canvas)]">
      <header className="sticky top-0 z-20 border-b border-[var(--color-ink)]/10 bg-[var(--color-canvas)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5 md:px-8">
          <a
            href="#"
            className="font-[var(--font-display)] text-lg font-semibold tracking-tight"
          >
            Fab<span className="text-[var(--color-trust)]">.</span>
          </a>
          <nav className="flex items-center gap-5 font-mono text-[11px] tracking-wide text-[var(--color-ink)]/55 sm:gap-7">
            <a href="#ctflex" className="transition hover:text-[var(--color-ink)]">
              ct flex
            </a>
            <a href="#zsl" className="transition hover:text-[var(--color-ink)]">
              zsl
            </a>
            <a href="#contact" className="transition hover:text-[var(--color-ink)]">
              ask
            </a>
          </nav>
        </div>
      </header>

      <CoverageStrip />
      <FogHero />
      <ProjectEvidence />
      <ContactSection />

      <footer className="border-t border-[var(--color-ink)]/15 px-5 py-8 text-center font-mono text-[11px] text-[var(--color-ink)]/45 md:px-8">
        Fab Lashidi · Bulawayo · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
