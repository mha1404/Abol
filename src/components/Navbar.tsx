import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { navLinks, profile } from "@/lib/data";
import { useActiveSection, useScrollProgress } from "@/hooks/useSiteFx";
import { scrollToId } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { Close, Globe, Menu, Moon, Sigma, Sun } from "@/components/Icons";

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar({ dark, toggleTheme }: { dark: boolean; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();
  const active = useActiveSection(sectionIds);
  const { c, L, toggle } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-[3px] w-full bg-transparent">
        <div
          className="h-full bg-copper transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "border-b border-line bg-paper/85 backdrop-blur-xl" : "border-b border-transparent",
        )}
      >
        <nav className="shell flex h-16 items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex cursor-pointer items-center gap-2.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-paper">
              <Sigma className="h-5 w-5" />
            </span>
            <span className="text-start leading-tight">
              <span className="block text-[0.82rem] font-bold">{L(profile.name)}</span>
              <span className="block text-[0.62rem] text-inksoft">{c.navTagline}</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                className={cn(
                  "relative cursor-pointer rounded-full px-3 py-2 text-[0.8rem] font-medium transition",
                  active === link.id ? "text-ink" : "text-inksoft hover:text-ink",
                  link.secondary && "hidden xl:inline-flex",
                )}
              >
                {L(link.label)}
                {active === link.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-copper" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={c.navLang}
              title={c.navLang}
              className="flex h-9 cursor-pointer items-center gap-1.5 rounded-xl border border-line px-2.5 text-[0.72rem] font-bold text-inksoft transition hover:border-ink/30 hover:text-ink"
            >
              <Globe className="h-4 w-4" />
              {c.navLangShort}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={c.navTheme}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-line text-inksoft transition hover:border-ink/30 hover:text-ink"
            >
              {dark ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>
            <button
              type="button"
              onClick={() => go("booking")}
              className="btn btn-primary hidden px-4 py-2.5 text-[0.78rem] sm:inline-flex"
            >
              {c.navBook}
            </button>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={c.navMenu}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-line text-ink lg:hidden"
            >
              {open ? <Close className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
            </button>
          </div>
        </nav>

        <div
          className={cn(
            "overflow-hidden border-line bg-paper/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 lg:hidden",
            open ? "max-h-[28rem] border-t opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="shell grid grid-cols-2 gap-2 py-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => go(link.id)}
                className={cn(
                  "cursor-pointer rounded-2xl border border-line px-4 py-3 text-start text-[0.82rem] font-medium transition hover:border-ink/30",
                  active === link.id ? "bg-surface2 text-ink" : "text-inksoft",
                )}
              >
                {L(link.label)}
              </button>
            ))}
            <button
              type="button"
              onClick={toggle}
              className="col-span-2 flex cursor-pointer items-center justify-center gap-2 rounded-2xl border border-line px-4 py-3 text-[0.82rem] font-semibold"
            >
              <Globe className="h-4 w-4 text-copper" />
              {c.navLang}
            </button>
          </div>
          <p className="shell pb-4 text-[0.66rem] text-inksoft" dir="ltr">
            {profile.nameEn} — @daghighifar
          </p>
        </div>
      </div>
    </header>
  );
}
