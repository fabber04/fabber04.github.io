import ContactForm from "./ContactForm";
import { contactAsk, socials } from "./data";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl border-t border-[var(--color-ink)]/15 px-5 py-16 md:px-8 md:py-20"
    >
      <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
        Let&apos;s talk
      </h2>
      <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-[var(--color-ink)]/75">
        {contactAsk}
      </p>

      <div className="mt-10 max-w-xl">
        <ContactForm />
      </div>

      <div className="mt-12">
        <p className="font-mono text-[10px] tracking-[0.16em] text-[var(--color-ink)]/45 uppercase">
          elsewhere
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {socials.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--color-ink)]/15 bg-[var(--color-panel)] py-1.5 pr-3 pl-1.5 font-mono text-[11px] text-[var(--color-ink)]/70 transition hover:border-[var(--color-trust)] hover:text-[var(--color-ink)]"
              >
                <img
                  src={s.avatar}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 object-cover"
                />
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
