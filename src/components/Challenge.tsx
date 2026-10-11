import { useState } from "react";
import { challenges } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { fill } from "@/lib/utils";
import { Reveal, Section, SectionHead } from "@/components/ui";
import { Bulb, Check, Sigma } from "@/components/Icons";

export default function Challenge() {
  const { c, L, num } = useLang();
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [solved, setSolved] = useState<number[]>([]);

  const current = challenges[index];

  const pick = (i: number) => {
    setIndex(i);
    setOpen(false);
  };

  const next = () => {
    setIndex((i) => (i + 1) % challenges.length);
    setOpen(false);
  };

  const reveal = () => {
    setOpen(true);
    setSolved((s) => (s.includes(index) ? s : [...s, index]));
  };

  return (
    <Section id="challenge" className="border-y border-line bg-surface/40">
      <SectionHead eyebrow={c.challengeEyebrow} title={c.challengeTitle} desc={c.challengeDesc} />

      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal className="card h-fit p-6">
          <p className="eyebrow">{c.challengeToday}</p>
          <ul className="mt-4 space-y-2">
            {challenges.map((ch, i) => (
              <li key={L(ch.level)}>
                <button
                  type="button"
                  onClick={() => pick(i)}
                  className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-start text-[0.78rem] font-medium transition ${
                    i === index
                      ? "border-transparent bg-ink text-paper"
                      : "border-line text-inksoft hover:border-ink/30 hover:text-ink"
                  }`}
                >
                  {fill(c.challengeProblem, { n: num(i + 1) })}
                  <span className="flex items-center gap-2 text-[0.66rem] opacity-80">
                    {solved.includes(i) && <Check className="h-3.5 w-3.5" />}
                    {L(ch.level)}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-line bg-surface2/60 p-5">
            <p className="flex items-center gap-2 text-[0.75rem] font-semibold">
              <Bulb className="h-4 w-4 text-copper" />
              {c.challengeHint}
            </p>
            <p className="mt-2 text-[0.72rem] leading-6 text-inksoft">
              {open ? L(current.hint) : c.challengeHintLocked}
            </p>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 text-[0.7rem] text-inksoft">
            <span>
              {c.challengeSolved}{" "}
              <span className="num font-bold text-ink">{num(solved.length)}</span> {c.challengeOf}{" "}
              <span className="num">{num(challenges.length)}</span>
            </span>
            <div className="flex gap-1">
              {challenges.map((ch, i) => (
                <span
                  key={L(ch.level)}
                  className={`h-1.5 w-6 rounded-full ${solved.includes(i) ? "bg-copper" : "bg-line"}`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal variant="scale" className="card flex flex-col justify-between gap-8 bg-dots p-7 sm:p-9">
          <div>
            <span className="chip text-inksoft">
              <Sigma className="h-3.5 w-3.5 text-copper" />
              {c.challengeLevel} {L(current.level)}
            </span>
            <p className="mt-6 text-[1.02rem] leading-9 font-semibold sm:text-[1.15rem]">
              {L(current.q)}
            </p>

            <div className="accordion-body mt-7" data-open={open}>
              <div>
                <div className="rounded-2xl border border-copper/25 bg-coppersoft/60 p-5">
                  <p className="flex items-center gap-2 text-[0.76rem] font-bold text-copper">
                    <Check className="h-4 w-4" />
                    {c.challengeAnswer}
                  </p>
                  <p className="mt-2.5 text-[0.8rem] leading-8 text-inksoft">{L(current.a)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={reveal}
              disabled={open}
              className="btn btn-primary"
              style={open ? { opacity: 0.55, cursor: "default" } : undefined}
            >
              {open ? c.challengeShown : c.challengeShow}
            </button>
            <button type="button" onClick={next} className="btn btn-outline">
              {c.challengeNext}
            </button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
