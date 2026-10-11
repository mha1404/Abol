import { stats } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { Reveal, StatNumber } from "@/components/ui";

export default function Stats() {
  const { c, L } = useLang();

  return (
    <section className="py-14 sm:py-20">
      <div className="shell">
        <div className="card grid gap-8 p-8 sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={L(s.label)} delay={i * 90} className="relative">
              <StatNumber value={s.value} suffix={L(s.suffix)} />
              <p className="mt-2 text-[0.85rem] font-semibold">{L(s.label)}</p>
              <p className="mt-1 text-[0.7rem] text-inksoft">{L(s.hint)}</p>
              {i < stats.length - 1 && (
                <span className="absolute -left-4 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-line lg:block" />
              )}
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center text-[0.68rem] text-inksoft">{c.statsNote}</p>
      </div>
    </section>
  );
}
