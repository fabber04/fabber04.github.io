import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "mt-1.5 w-full border-b border-[var(--color-ink)]/20 bg-transparent px-0 py-2.5 font-[var(--font-body)] text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-ink)]/35 focus:border-[var(--color-trust)]";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/fabulousdallen87@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        },
      );
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value="Portfolio contact" />
      <input type="hidden" name="_template" value="table" />
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-5 sm:grid-cols-2 sm:gap-8">
        <label className="block">
          <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-ink)]/50 uppercase">
            Name
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-ink)]/50 uppercase">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--color-ink)]/50 uppercase">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className={`${fieldClass} resize-none`}
          placeholder="Say hello…"
        />
      </label>

      <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-[var(--color-ink)] px-5 py-2.5 font-mono text-[11px] font-medium tracking-wide text-[var(--color-panel)] transition hover:bg-[var(--color-trust)] disabled:opacity-50"
        >
          {status === "sending" ? "sending…" : "send message"}
        </button>
        {status === "sent" && (
          <p className="font-mono text-[11px] text-[var(--color-live)]">
            sent — I&apos;ll get back to you.
          </p>
        )}
        {status === "error" && (
          <p className="font-mono text-[11px] text-[#a33c3c]">
            failed — try again in a moment.
          </p>
        )}
      </div>
    </form>
  );
}
