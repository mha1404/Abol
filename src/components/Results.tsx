import { useRef } from "react";
import { results } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { Reveal, Section, SectionHead } from "@/components/ui";
import { ChevronLeft, ChevronRight, Quote, Star } from "@/components/Icons";

export default function Results() {
  const { c, L, dir } = useLang();
  const trackRef = useRef<HTMLDivElement | null>(null);

  const highlights = [
    { value: "9", label: c.resultsHl1 },
    { value: "31", label: c.resultsHl2 },
    { value: "12", label: c.resultsHl3 },
    { value: c.resultsHl4v, label: c.resultsHl4 },
  ];

  const scroll = (dirSign: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * (dir === "rtl" ? -1 : 1);
    el.scrollBy({ left: dirSign * amount, behavior: "smooth" });
  };

  return (
    <Section id="results">
      <SectionHead
        eyebrow={c.resultsEyebrow}
        title={c.resultsTitle}
        desc={c.resultsDesc}
        action={
          <Reveal delay={100} className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label={c.resultsPrev}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line text-inksoft transition hover:border-ink/30 hover:text-ink"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label={c.resultsNext}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line text-inksoft transition hover:border-ink/30 hover:text-ink"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </Reveal>
        }
      />

      <Reveal className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.label} className="card p-5 text-center">
            <p className="num text-2xl font-bold text-copper">{h.value}</p>
            <p className="mt-1.5 text-[0.72rem] text-inksoft">{h.label}</p>
          </div>
        ))}
      </Reveal>

      <div ref={trackRef} className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3">
        {results.map((r, i) => (
          <Reveal
            key={L(r.name)}
            delay={(i % 3) * 80}
            className="card min-w-[18rem] flex-1 snap-start p-6 sm:min-w-[21rem]"
          >
            <Quote className="h-6 w-6 text-copper/40" />
            <div className="mt-3 flex gap-0.5 text-copper">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-3.5 w-3.5" />
              ))}
            </div>
            <p className="mt-4 text-[0.82rem] leading-8 text-inksoft">{L(r.text)}</p>
            <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-surface2 text-[0.72rem] font-bold">
                {L(r.name).slice(0, 1)}
              </span>
              <div>
                <p className="text-[0.8rem] font-bold">{L(r.name)}</p>
                <p className="text-[0.68rem] text-inksoft">{L(r.role)}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
