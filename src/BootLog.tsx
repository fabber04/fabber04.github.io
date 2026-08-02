import { useEffect, useState } from "react";
import { bootLines } from "./data";

export default function BootLog() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= bootLines.length) return;
    const delay = visible === 0 ? 400 : 220;
    const t = setTimeout(() => setVisible((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]/90 font-mono text-[12.5px] leading-relaxed shadow-[0_24px_60px_-28px_rgba(0,0,0,0.65)] backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-4 py-2.5">
        <span className="h-2 w-2 rounded-sm bg-[#c45c5c]/75" />
        <span className="h-2 w-2 rounded-sm bg-[var(--color-gold)]/75" />
        <span className="h-2 w-2 rounded-sm bg-[var(--color-teal)]/75" />
        <span className="ml-2 text-[11px] tracking-wide text-[var(--color-ink-dim)]">
          status.log
        </span>
        <span className="ml-auto text-[10px] text-[var(--color-ink-dim)]/60">
          tty
        </span>
      </div>
      <div className="min-h-[210px] px-4 py-4">
        {bootLines.slice(0, visible).map((line, i) => (
          <div key={i} className="boot-line text-[var(--color-ink-dim)]">
            <span className="text-[var(--color-teal)]">{line.slice(0, 1)}</span>
            {line.slice(1)}
          </div>
        ))}
        {visible < bootLines.length ? (
          <span className="mt-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-[var(--color-gold)]" />
        ) : (
          <div className="boot-line mt-1 text-[var(--color-teal)]">
            <span className="inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-[var(--color-gold)] align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}
