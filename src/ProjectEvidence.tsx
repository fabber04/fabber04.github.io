import { projects, zslHowItWent } from "./data";

const ctflex = projects.find((p) => p.id === "ctflex")!;
const zsl = projects.find((p) => p.id === "zsl")!;

export default function ProjectEvidence() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 px-5 py-16 md:px-8 md:py-20">
      {/* CT Flex */}
      <section id="ctflex" aria-labelledby="ctflex-title">
        <div className="flex flex-wrap items-center gap-2">
          <span className="border border-[var(--color-seal)]/50 bg-[var(--color-seal)]/12 px-2 py-0.5 font-mono text-[10px] tracking-wider text-[var(--color-seal)]">
            WINNER
          </span>
          <span className="font-mono text-[10px] tracking-wider text-[var(--color-ink)]/45">
            AIE 2026
          </span>
        </div>
        <h2
          id="ctflex-title"
          className="mt-4 font-[var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl"
        >
          {ctflex.name}
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[var(--color-ink)]/75">
          {ctflex.summary}
        </p>
        <p className="mt-4 font-mono text-[11px] text-[var(--color-ink)]/50">
          {ctflex.stack.join(" · ")}
        </p>
        {ctflex.link && (
          <a
            href={ctflex.link}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block font-mono text-[11px] text-[var(--color-trust)] underline-offset-4 hover:underline"
          >
            view CT Flex site →
          </a>
        )}
      </section>

      {/* ZSL */}
      <section id="zsl" aria-labelledby="zsl-title">
        <div className="flex flex-wrap items-center gap-2">
          <span className="border border-[var(--color-ink)]/20 bg-[var(--color-panel)] px-2 py-0.5 font-mono text-[10px] tracking-wider text-[var(--color-ink)]/65">
            RESEARCH
          </span>
          {zsl.metric && (
            <span className="font-mono text-[10px] tracking-wider text-[var(--color-ink)]/45">
              {zsl.metric.label}: {zsl.metric.value}
            </span>
          )}
        </div>
        <h2
          id="zsl-title"
          className="mt-4 font-[var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl"
        >
          {zsl.name}
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[var(--color-ink)]/75">
          {zsl.summary}
        </p>
        <p className="mt-4 font-mono text-[11px] text-[var(--color-ink)]/50">
          {zsl.stack.join(" · ")}
        </p>

        <div className="mt-8 border border-[var(--color-ink)]/15 bg-[var(--color-ink)] px-4 py-4 font-mono text-[11px] leading-relaxed text-[var(--color-panel)] md:px-5">
          <p className="text-[var(--color-panel)]/50">
            how it actually went — dissertation figures
          </p>
          <ul className="mt-3 space-y-2">
            {zslHowItWent.map((row) => (
              <li key={row.tag}>
                <span className="text-[var(--color-live)]">&gt; {row.tag}</span>
                <span className="text-[var(--color-panel)]/40"> — </span>
                <span className="text-[var(--color-panel)]/85">{row.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
