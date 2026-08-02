import { useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";
import { projects, type Status } from "./data";

const statusColor: Record<Status, string> = {
  LIVE: "text-[var(--color-teal)] border-[var(--color-teal)]/40 bg-[var(--color-teal)]/8",
  WINNER: "text-[var(--color-gold)] border-[var(--color-gold)]/45 bg-[var(--color-gold)]/10",
  SUBMITTED: "text-[var(--color-gold)] border-[var(--color-gold)]/35 bg-[var(--color-gold)]/6",
  "IN PROGRESS": "text-[var(--color-ink-dim)] border-[var(--color-border)] bg-[var(--color-surface)]/60",
  RESEARCH: "text-[var(--color-ink-dim)] border-[var(--color-border)] bg-[var(--color-surface)]/60",
};

const skillGroups = [
  {
    label: "Machine Learning",
    items: ["PyTorch", "XGBoost", "MediaPipe", "Fairness Auditing"],
  },
  {
    label: "Web & Systems",
    items: ["React / Vite / TS", "FastAPI", "PostgreSQL", "Firebase"],
  },
  {
    label: "Security",
    items: ["Penetration Testing", "Active Directory Security", "Network Attack Paths"],
  },
  {
    label: "Domain",
    items: ["Actuarial Modeling", "Market Systems Research"],
  },
];

const featured =
  projects.find((p) => p.id === "ctflex") ??
  projects.find((p) => p.status === "LIVE") ??
  projects[0];
const rest = projects.filter((p) => p.id !== featured.id);

const socials = [
  {
    label: "github",
    href: "https://github.com/fabber04",
    avatar: "/avatars/github.png",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/fabilous-lashidi-571ab0259/",
    avatar: "/avatars/linkedin.png",
  },
  {
    label: "tiktok",
    href: "https://www.tiktok.com/@fabulous.lashid",
    avatar: "/avatars/tiktok.jpg",
  },
] as const;

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={`mx-auto max-w-5xl px-6 py-20 transition-all duration-700 ease-out md:py-28 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      <h2 className="font-[var(--font-display)] text-3xl font-medium tracking-tight md:text-4xl">
        {title}
      </h2>
      <div className="mt-10 md:mt-12">{children}</div>
    </section>
  );
}

function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-block border px-2 py-0.5 font-mono text-[10px] tracking-wider ${statusColor[status]}`}
    >
      {status}
    </span>
  );
}

function App() {
  return (
    <div className="bg-atmosphere min-h-screen">
      <header className="sticky top-0 z-20 border-b border-[var(--color-border)]/70 bg-[var(--color-bg)]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
          <a
            href="#"
            className="font-[var(--font-display)] text-lg tracking-tight"
          >
            Fab<span className="text-[var(--color-gold)]">.</span>
          </a>
          <nav className="flex items-center gap-6 font-mono text-[11px] tracking-wide text-[var(--color-ink-dim)] sm:gap-8">
            <a href="#work" className="transition hover:text-[var(--color-ink)]">
              work
            </a>
            <a
              href="#skills"
              className="hidden transition hover:text-[var(--color-ink)] sm:inline"
            >
              skills
            </a>
            <a href="#contact" className="transition hover:text-[var(--color-ink)]">
              contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero — brand + line + CTAs + dominant portrait */}
      <section className="relative mx-auto grid min-h-[calc(100svh-3.25rem)] max-w-6xl lg:grid-cols-[1fr_1.05fr]">
        <div className="flex flex-col justify-center px-6 py-12 md:px-10 md:py-16 lg:py-20">
          <h1 className="anim-fade-up font-[var(--font-display)] text-[clamp(3.5rem,12vw,7.5rem)] font-medium leading-[0.9] tracking-tight">
            Fab<span className="text-[var(--color-gold)]">.</span>
          </h1>
          <p className="anim-fade-up anim-delay-2 mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-ink-dim)] md:mt-8 md:text-base">
            Conceptualizing and building computing solutions that matter —
            from research systems to products people can actually use,
            documented in public as I go.
          </p>
          <div className="anim-fade-up anim-delay-3 mt-8 flex flex-wrap gap-3 md:mt-10">
            <a
              href="#work"
              className="bg-[var(--color-ink)] px-5 py-2.5 font-mono text-[11px] font-medium tracking-wide text-[var(--color-surface)] transition hover:bg-[var(--color-gold)]"
            >
              view work
            </a>
            <a
              href="#contact"
              className="border border-[var(--color-ink)]/25 px-5 py-2.5 font-mono text-[11px] tracking-wide text-[var(--color-ink)] transition hover:border-[var(--color-ink)]"
            >
              contact
            </a>
          </div>
          <p className="anim-fade-up anim-delay-4 mt-10 font-mono text-[10px] tracking-[0.16em] text-[var(--color-ink-dim)] uppercase">
            Fabilous Lashidi · CS · NUST Bulawayo
          </p>
        </div>

        <div className="anim-portrait relative min-h-[55vw] overflow-hidden lg:min-h-full">
          <img
            src="/avatars/linkedin.png"
            alt="Fabilous Lashidi"
            className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[var(--color-bg)]/40 lg:via-transparent lg:to-transparent"
          />
        </div>
      </section>

      {/* Work */}
      <Section id="work" title="Selected work">
        <a
          href={featured.link}
          target={featured.link?.startsWith("http") ? "_blank" : undefined}
          rel={featured.link?.startsWith("http") ? "noreferrer" : undefined}
          className="project-row group block border-b border-[var(--color-border)] pb-10 pt-2"
        >
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={featured.status} />
            <span className="font-mono text-[10px] tracking-wider text-[var(--color-ink-dim)]">
              FEATURED
            </span>
          </div>
          <h3 className="mt-5 font-[var(--font-display)] text-3xl tracking-tight md:text-5xl">
            {featured.name}
          </h3>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--color-ink-dim)] md:text-base">
            {featured.summary}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            {featured.metric && (
              <p className="font-mono text-xs text-[var(--color-gold)]">
                {featured.metric.label}:{" "}
                <span className="text-[var(--color-ink)]">
                  {featured.metric.value}
                </span>
              </p>
            )}
            <p className="font-mono text-[11px] text-[var(--color-ink-dim)]">
              {featured.stack.join(" · ")}
            </p>
            {featured.link?.startsWith("http") && (
              <span className="font-mono text-[11px] text-[var(--color-ink)] transition group-hover:text-[var(--color-gold)]">
                view site →
              </span>
            )}
          </div>
        </a>

        <ul className="divide-y divide-[var(--color-border)]">
          {rest.map((p) => {
            const external = p.link?.startsWith("http");
            const rowClass =
              "project-row group flex flex-col gap-3 py-7 sm:flex-row sm:items-start sm:justify-between sm:gap-10";
            const body = (
              <>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-[var(--font-display)] text-xl tracking-tight md:text-2xl">
                      {p.name}
                    </h3>
                    <StatusBadge status={p.status} />
                  </div>
                  <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-[var(--color-ink-dim)]">
                    {p.summary}
                  </p>
                  {p.metric && (
                    <p className="mt-3 font-mono text-[11px] text-[var(--color-teal)]">
                      {p.metric.label}:{" "}
                      <span className="text-[var(--color-ink)]">
                        {p.metric.value}
                      </span>
                    </p>
                  )}
                  {external && (
                    <span className="mt-3 inline-block font-mono text-[11px] text-[var(--color-ink)] transition group-hover:text-[var(--color-gold)]">
                      view site →
                    </span>
                  )}
                </div>
                <p className="shrink-0 font-mono text-[10px] leading-relaxed tracking-wide text-[var(--color-ink-dim)] sm:max-w-[9.5rem] sm:text-right">
                  {p.stack.join(" · ")}
                </p>
              </>
            );
            return (
              <li key={p.id}>
                {external ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className={rowClass}
                  >
                    {body}
                  </a>
                ) : (
                  <div className={rowClass}>{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Tools I reach for">
        <ul className="max-w-2xl space-y-6">
          {skillGroups.map((g) => (
            <li
              key={g.label}
              className="flex flex-col gap-1 border-t border-[var(--color-border)] pt-5 sm:flex-row sm:gap-8"
            >
              <p className="shrink-0 font-mono text-[11px] tracking-[0.12em] text-[var(--color-ink-dim)] sm:w-40">
                {g.label}
              </p>
              <p className="text-[15px] leading-relaxed">{g.items.join(" · ")}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Let's talk">
        <p className="max-w-md text-[15px] leading-relaxed text-[var(--color-ink-dim)]">
          Open to research collabs, hackathon teams, and internships.
          Drop a note — I&apos;ll get back to you.
        </p>

        <div className="mt-10 max-w-xl border-t border-[var(--color-border)] pt-8">
          <ContactForm />
        </div>

        <div className="mt-14">
          <p className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ink-dim)] uppercase">
            or find me
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2.5 border border-[var(--color-border)] bg-[var(--color-surface)]/70 py-1.5 pr-3.5 pl-1.5 transition hover:border-[var(--color-gold)]/60"
                >
                  <img
                    src={s.avatar}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 object-cover"
                  />
                  <span className="font-mono text-[11px] tracking-wide text-[var(--color-ink-dim)] transition group-hover:text-[var(--color-ink)]">
                    {s.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <footer className="border-t border-[var(--color-border)] px-6 py-10 text-center font-mono text-[11px] tracking-wide text-[var(--color-ink-dim)]">
        <p>
          built by Fab · Bulawayo, Zimbabwe · {new Date().getFullYear()}
        </p>
        <a
          href="https://fabber04.github.io/ct-flex/"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-[var(--color-gold)] transition hover:underline"
        >
          CT Flex →
        </a>
      </footer>
    </div>
  );
}

export default App;
