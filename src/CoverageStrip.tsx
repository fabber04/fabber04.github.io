import { useEffect, useState } from "react";
import { FOG_URL } from "./data";

type SiteState = "checking" | "up" | "down" | "cors";

function formatChecked(d: Date) {
  return d.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export default function CoverageStrip() {
  const [state, setState] = useState<SiteState>("checking");
  const [checkedAt, setCheckedAt] = useState<Date | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(FOG_URL, {
          method: "HEAD",
          mode: "cors",
          cache: "no-store",
        });
        if (cancelled) return;
        setCheckedAt(new Date());
        setState(res.ok ? "up" : "down");
      } catch {
        // CORS or network — try a no-cors probe to distinguish opaque reachability
        try {
          await fetch(FOG_URL, {
            method: "GET",
            mode: "no-cors",
            cache: "no-store",
          });
          if (cancelled) return;
          setCheckedAt(new Date());
          // Opaque response: browser reached something, but we cannot read status
          setState("cors");
        } catch {
          if (cancelled) return;
          setCheckedAt(new Date());
          setState("down");
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const statusLabel =
    state === "checking"
      ? "checking…"
      : state === "up"
        ? "site UP"
        : state === "down"
          ? "site DOWN / unreachable"
          : "can’t verify (CORS blocked from this origin)";

  return (
    <div
      role="status"
      aria-live="polite"
      className="border-y border-[var(--color-ink)]/15 bg-[var(--color-ink)] text-[var(--color-panel)]"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-baseline gap-x-3 gap-y-1 px-5 py-2.5 font-mono text-[11px] tracking-wide md:px-8">
        <span className="text-[var(--color-live)]">▌</span>
        <span>Family of Greatness</span>
        <span className="text-[var(--color-panel)]/45">·</span>
        <span className="text-[var(--color-live)]">LIVE</span>
        <span className="text-[var(--color-panel)]/45">·</span>
        <span
          className={
            state === "up"
              ? "text-[var(--color-live)]"
              : state === "down"
                ? "text-[#c45c5c]"
                : "text-[var(--color-panel)]/75"
          }
        >
          {statusLabel}
        </span>
        {checkedAt && (
          <>
            <span className="text-[var(--color-panel)]/45">·</span>
            <span className="text-[var(--color-panel)]/60">
              checked {formatChecked(checkedAt)}
            </span>
          </>
        )}
      </div>
    </div>
  );
}
