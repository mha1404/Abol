import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { useCountUp } from "@/hooks/useSiteFx";
import { useLang } from "@/lib/i18n";

export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  variant?: "up" | "scale" | "right";
  className?: string;
  as?: "div" | "li" | "article" | "section" | "header";
}) {
  return (
    <Tag
      data-reveal={variant}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      <div className="shell">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  desc,
  center = false,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
  center?: boolean;
  action?: ReactNode;
}) {
  return (
    <Reveal
      className={cn(
        "mb-10 flex flex-col gap-5 sm:mb-14",
        center ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between",
      )}
    >
      <div className={cn("max-w-2xl", center && "flex flex-col items-center")}>
        <span className="eyebrow inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-copper" />
          {eyebrow}
        </span>
        <h2 className="mt-3 text-2xl font-bold sm:text-[2rem]">{title}</h2>
        {desc && <p className="mt-3 text-sm leading-7 text-inksoft sm:text-[0.95rem]">{desc}</p>}
      </div>
      {action}
    </Reveal>
  );
}

export function StatNumber({ value, suffix }: { value: number; suffix?: string }) {
  const { ref, value: shown } = useCountUp(value);
  const { num } = useLang();
  return (
    <span ref={ref} className="num text-3xl font-bold sm:text-4xl">
      {num(shown)}
      <span className="text-copper">{suffix}</span>
    </span>
  );
}

export function Pill({
  children,
  active,
  onClick,
}: {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "slot chip cursor-pointer px-4 py-2 text-[0.78rem] font-semibold",
        active
          ? "border-transparent bg-ink text-paper"
          : "text-inksoft hover:border-ink/30 hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

export function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold text-inksoft">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-[0.7rem] text-copper">{error}</span>}
    </label>
  );
}

export const inputClass =
  "w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition placeholder:text-inksoft/60 focus:border-copper/60 focus:ring-4 focus:ring-copper/10";
