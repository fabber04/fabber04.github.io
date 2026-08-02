import { useEffect, useRef, useState } from "react";
import BootLog from "./BootLog";
import ContactForm from "./ContactForm";
import { projects, type Status } from "./data";

const statusColor: Record<Status, string> = {
  LIVE: "text-[var(--color-teal)] border-[var(--color-teal)]/35 bg-[var(--color-teal)]/8",
  WINNER: "text-[var(--color-gold)] border-[var(--color-gold)]/35 bg-[var(--color-gold)]/8",
  SUBMITTED: "text-[var(--color-gold)] border-[var(--color-gold)]/35 bg-[var(--color-gold)]/8",
  "IN PROGRESS": "text-[var(--color-ink-dim)] border-[var(--color-border)] bg-white/[0.03]",
  RESEARCH: "text-[var(--color-ink-dim)] border-[var(--color-border)] bg-white/[0.03]",
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
    detail: "@fabber04",
    href: "https://github.com/fabber04",
    avatar: "/avatars/github.png",
  },
  {
    label: "linkedin",
    detail: "Fabilous Lashidi",
    href: "https://www.linkedin.com/in/fabilous-lashidi-571ab0259/",
    avatar: "/avatars/linkedin.png",
  },
  {
    label: "tiktok",
    detail: "build log",
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
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={`mx-auto max-w-5xl px-6 py-20 transition-all duration-700 ease-out md:py-28 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--color-teal)]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-[var(--font-display)] text-3xl font-medium tracking-tight md:text-4xl">
        {title}
      </h2>
      <div className="mt-12">{children}</div>
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
      <header className="sticky top-0 z-20 border-b border-[var(--color-border)]/80 bg-[var(--color-bg)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="#"
            className="font-[var(--font-display)] text-lg tracking-tight"
          >
            Fab<span className="text-[var(--color-gold)]">.</span>Lashidi
          </a>
          <nav className="flex items-center gap-5 font-mono text-[11px] tracking-wide text-[var(--color-ink-dim)] sm:gap-8">
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
          <a
            href="#contact"
            className="border border-[var(--color-gold)]/45 px-3 py-1.5 font-mono text-[11px] text-[var(--color-gold)] transition hover:bg-[var(--color-gold)]/10"
          >
            get in touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto grid max-w-5xl items-center gap-12 px-6 pb-14 pt-14 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:pb-24 md:pt-24">
        <div>
          <div className="anim-fade-up flex items-center gap-4">
            <img
              src="/avatars/linkedin.png"
              alt="Fabilous Lashidi"
              width={96}
              height={96}
              className="h-20 w-20 object-cover object-top ring-1 ring-[var(--color-border)] md:h-24 md:w-24"
            />
            <div>
              <p className="font-[var(--font-display)] text-2xl tracking-tight text-[var(--color-ink)] md:text-3xl">
                Fab<span className="text-[var(--color-gold)]">.</span>Lashidi
              </p>
              <p className="mt-2 font-mono text-[11px] tracking-[0.18em] text-[var(--color-ink-dim)]">
                CS · NUST BULAWAYO · YEAR 2
              </p>
            </div>
          </div>
          <h1 className="anim-fade-up anim-delay-2 mt-7 font-[var(--font-display)] text-[2.2rem] font-medium leading-[1.12] tracking-tight md:mt-8 md:text-5xl">
            Systems that carry real weight —{" "}
            <em className="italic text-[var(--color-gold)]">insurance</em>,{" "}
            <em className="italic text-[var(--color-gold)]">accessibility</em>,{" "}
            <em className="italic text-[var(--color-gold)]">community</em>.
          </h1>
          <p className="anim-fade-up anim-delay-3 mt-5 max-w-md text-[15px] leading-relaxed text-[var(--color-ink-dim)] md:mt-6">
            Conceptualizing and building computing solutions that matter —
            from research systems to products people can actually use,
            documented in public as I go.
          </p>
          <div className="anim-fade-up anim-delay-4 mt-8 flex flex-wrap gap-3 md:mt-9">
            <a
              href="#work"
              className="bg-[var(--color-gold)] px-5 py-2.5 font-mono text-[11px] font-medium tracking-wide text-[var(--color-bg)] transition hover:opacity-90"
            >
              view work
            </a>
            <a
              href="#contact"
              className="border border-[var(--color-border)] px-5 py-2.5 font-mono text-[11px] tracking-wide text-[var(--color-ink)] transition hover:border-[var(--color-ink-dim)]"
            >
              contact
            </a>
          </div>
        </div>
        <div className="anim-fade-in anim-delay-2">
          <BootLog />
        </div>
      </section>

      {/* Work */}
      <Section id="work" eyebrow="SERVICES RUNNING" title="Selected work">
        <a
          href={featured.link}
          target={featured.link?.startsWith("http") ? "_blank" : undefined}
          rel={featured.link?.startsWith("http") ? "noreferrer" : undefined}
          className={`project-row group block border border-[var(--color-border)] border-l-[3px] bg-[var(--color-surface)]/60 px-6 py-7 md:px-8 ${
            featured.status === "WINNER"
              ? "border-l-[var(--color-gold)]"
              : "border-l-[var(--color-teal)]"
          }`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={featured.status} />
            <span className="font-mono text-[10px] tracking-wider text-[var(--color-ink-dim)]">
              FEATURED
            </span>
          </div>
          <h3 className="mt-4 font-[var(--font-display)] text-2xl tracking-tight md:text-3xl">
            {featured.name}
          </h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--color-ink-dim)]">
            {featured.summary}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
            {featured.metric && (
              <p className="font-mono text-xs text-[var(--color-teal)]">
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
              <span className="font-mono text-[11px] text-[var(--color-gold)] transition group-hover:underline">
                view site →
              </span>
            )}
          </div>
        </a>

        <ul className="mt-3 divide-y divide-[var(--color-border)] border border-[var(--color-border)] border-t-0">
          {rest.map((p) => {
            const external = p.link?.startsWith("http");
            const rowClass =
              "project-row group flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8 md:px-6";
            const body = (
              <>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-[var(--font-display)] text-lg tracking-tight">
                      {p.name}
                    </h3>
                    <StatusBadge status={p.status} />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-dim)]">
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
                    <span className="mt-3 inline-block font-mono text-[11px] text-[var(--color-gold)] transition group-hover:underline">
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
      <Section id="skills" eyebrow="STACK" title="Tools I reach for">
        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {skillGroups.map((g) => (
            <div
              key={g.label}
              className="border-t border-[var(--color-border)] pt-5"
            >
              <p className="font-mono text-[11px] tracking-[0.14em] text-[var(--color-ink-dim)]">
                {g.label}
              </p>
              <p className="mt-2.5 text-[15px] leading-relaxed">
                {g.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="OPEN CHANNEL" title="Let's talk">
        <p className="max-w-md text-[15px] leading-relaxed text-[var(--color-ink-dim)]">
          Open to research collabs, hackathon teams, and internships.
          Drop a note — I&apos;ll get back to you.
        </p>

        <div className="mt-10 max-w-xl border border-[var(--color-border)]/80 bg-[var(--color-surface)]/40 px-5 py-6 md:px-7 md:py-8">
          <ContactForm />
        </div>

        <div className="mt-12">
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
                  className="group inline-flex items-center gap-2.5 border border-[var(--color-border)] bg-[var(--color-bg)]/40 py-1.5 pr-3.5 pl-1.5 transition hover:border-[var(--color-gold)]/50 hover:bg-[var(--color-gold)]/[0.06]"
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
