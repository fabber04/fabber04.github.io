import { FOG_URL, projects } from "./data";

const fog = projects.find((p) => p.id === "fog")!;
const ctflex = projects.find((p) => p.id === "ctflex")!;

export default function FogHero() {
  return (
    <section className="mx-auto grid max-w-5xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:px-8 md:py-16 lg:py-20">
      <div>
        <div className="anim-fade-up flex flex-wrap items-center gap-2">
          <span className="border border-[var(--color-live)]/40 bg-[var(--color-live)]/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-[var(--color-live)]">
            LIVE
          </span>
          <span className="border border-[var(--color-seal)]/45 bg-[var(--color-seal)]/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-[var(--color-seal)]">
            also: {ctflex.name} · {ctflex.status}
          </span>
        </div>

        <h1 className="anim-fade-up anim-delay-1 mt-5 font-[var(--font-display)] text-[clamp(2.4rem,7vw,3.75rem)] font-semibold leading-[1.05] tracking-tight text-[var(--color-ink)]">
          {fog.name}
        </h1>

        <p className="anim-fade-up anim-delay-2 mt-5 max-w-md text-[17px] leading-relaxed text-[var(--color-ink)]/75">
          {fog.summary}
        </p>

        <div className="anim-fade-up anim-delay-3 mt-8 flex flex-wrap items-center gap-3">
          <a
            href={FOG_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-[var(--color-trust)] px-5 py-2.5 font-mono text-[11px] font-medium tracking-wide text-[var(--color-panel)] transition hover:bg-[var(--color-ink)]"
          >
            visit live site →
          </a>
          <a
            href={ctflex.link}
            target="_blank"
            rel="noreferrer"
            className="border border-[var(--color-ink)]/20 px-5 py-2.5 font-mono text-[11px] tracking-wide text-[var(--color-ink)] transition hover:border-[var(--color-seal)] hover:text-[var(--color-seal)]"
          >
            CT Flex winner →
          </a>
        </div>

        <p className="anim-fade-up anim-delay-3 mt-8 font-mono text-[10px] tracking-[0.14em] text-[var(--color-ink)]/50 uppercase">
          Fabilous Lashidi · CS · NUST Bulawayo · year 2
        </p>
      </div>

      <div className="anim-fade-up anim-delay-2 relative min-h-[280px] bg-[var(--color-panel)] md:min-h-[360px]">
        <img
          src="/avatars/linkedin.png"
          alt="Fabilous Lashidi"
          className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
        />
      </div>
    </section>
  );
}
