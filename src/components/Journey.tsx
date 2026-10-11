import { approach, timeline } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { Reveal, Section, SectionHead } from "@/components/ui";

export default function Journey() {
  const { c, L, num } = useLang();

  return (
    <Section id="journey" className="border-y border-line bg-surface/40">
      <SectionHead eyebrow={c.journeyEyebrow} title={c.journeyTitle} desc={c.journeyDesc} />

      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <ol className="relative space-y-8 border-s border-line ps-7">
          {timeline.map((t, i) => (
            <Reveal key={L(t.year)} as="li" delay={i * 80} className="relative">
              <span className="absolute -start-[2.15rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-copper/40 bg-paper">
                <span className="h-1.5 w-1.5 rounded-full bg-copper" />
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <span className="num rounded-lg bg-ink px-2 py-0.5 text-[0.68rem] font-bold text-paper">
                  {L(t.year)}
                </span>
                <h3 className="text-[0.92rem] font-bold">{L(t.title)}</h3>
              </div>
              <p className="mt-2 text-[0.78rem] leading-7 text-inksoft">{L(t.text)}</p>
            </Reveal>
          ))}
        </ol>

        <div className="space-y-5">
          <Reveal className="card bg-dots p-7">
            <h3 className="text-[1.05rem] font-bold">{c.journeyMethod}</h3>
            <p className="mt-2 text-[0.78rem] leading-7 text-inksoft">{c.journeyMethodSub}</p>
            <ol className="mt-6 space-y-5">
              {approach.map((a) => (
                <li key={L(a.title)} className="flex gap-4">
                  <span className="num flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-[0.75rem] font-bold text-copper">
                    {num(a.step)}
                  </span>
                  <div>
                    <p className="text-[0.85rem] font-semibold">{L(a.title)}</p>
                    <p className="mt-1 text-[0.74rem] leading-6 text-inksoft">{L(a.text)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120} className="card flex items-center gap-5 p-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink text-paper">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.9}
                className="h-6 w-6"
              >
                <path d="M6 19L18 5M6 5h5M13 19h5" strokeLinecap="round" />
              </svg>
            </span>
            <p className="text-[0.8rem] leading-7 text-inksoft">{c.journeyQuote}</p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
