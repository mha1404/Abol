import { notes } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { scrollToId } from "@/lib/utils";
import { Reveal, Section, SectionHead } from "@/components/ui";
import { ArrowLeft, Bulb, Clock, Sigma } from "@/components/Icons";

export default function Tips() {
  const { c, L } = useLang();

  return (
    <Section id="notes">
      <SectionHead eyebrow={c.tipsEyebrow} title={c.tipsTitle} desc={c.tipsDesc} />

      <div className="grid gap-5 md:grid-cols-2">
        {notes.map((n, i) => (
          <Reveal
            key={L(n.title)}
            as="article"
            delay={(i % 2) * 90}
            className="card group flex flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_36px_70px_-50px_rgba(0,0,0,0.6)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="chip text-inksoft">
                <Sigma className="h-3.5 w-3.5 text-copper" />
                {L(n.cat)}
              </span>
              <span className="flex items-center gap-1.5 text-[0.66rem] text-inksoft">
                <Clock className="h-3.5 w-3.5" />
                {L(n.time)} {c.tipsReadTime}
              </span>
            </div>

            <h3 className="mt-4 text-[0.98rem] leading-7 font-bold">{L(n.title)}</h3>
            <p className="mt-2.5 flex-1 text-[0.78rem] leading-7 text-inksoft">{L(n.text)}</p>

            <p className="mt-5 flex items-start gap-2 rounded-2xl border border-dashed border-line px-4 py-3 text-[0.72rem] leading-6 text-inksoft">
              <Bulb className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
              {L(n.task)}
            </p>

            <button
              type="button"
              onClick={() => scrollToId("challenge")}
              className="mt-5 flex cursor-pointer items-center gap-2 text-[0.74rem] font-semibold text-ink"
            >
              {c.tipsTask}
              <ArrowLeft className="h-4 w-4 text-copper transition group-hover:-translate-x-1 ltr:rotate-180" />
            </button>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
