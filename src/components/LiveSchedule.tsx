import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { contact, schedule } from "@/lib/data";
import { addSessionToCalendar } from "@/lib/download";
import { diffParts, examDate, examProgress, getUpcomingSessions } from "@/lib/scheduleTime";
import { fill, scrollToId } from "@/lib/utils";
import { useLang } from "@/lib/i18n";
import { Reveal, Section, SectionHead } from "@/components/ui";
import { Calendar, Check, Clock, Target } from "@/components/Icons";

export default function LiveSchedule() {
  const { c, L, lang, num, numInt, date } = useLang();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const [next, ...rest] = getUpcomingSessions(now, 3);
  const countdown = next ? diffParts(next.date, now) : null;
  const exam = diffParts(examDate, now);
  const progress = examProgress(now);

  const dayLabel = (id: string) => {
    const found = schedule.find((s) => s.id === id);
    return found ? L(found.day) : id;
  };

  const Unit = ({ value, label }: { value: number; label: string }) => (
    <div className="rounded-2xl border border-line bg-surface2/50 px-2 py-3 text-center">
      <p className="num text-xl font-bold tabular-nums sm:text-2xl">
        {num(String(value).padStart(2, "0"))}
      </p>
      <p className="mt-1 text-[0.62rem] text-inksoft">{label}</p>
    </div>
  );

  return (
    <Section id="live" className="border-b border-line">
      <SectionHead eyebrow={c.liveEyebrow} title={c.liveTitle} desc={c.liveDesc} />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal variant="scale" className="card relative overflow-hidden p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" />
          <div className="relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="chip text-inksoft">
                <Clock className="h-3.5 w-3.5 text-copper" />
                {c.liveNextClass}
              </span>
              <span className="text-[0.66rem] text-inksoft">{c.liveUpdating} ✦</span>
            </div>

            {next && countdown ? (
              <>
                <h3 className="mt-5 text-[1.05rem] font-bold sm:text-[1.2rem]">{L(next.label)}</h3>
                <p className="mt-1.5 text-[0.75rem] text-inksoft">
                  {date(next.date)} — <span className="num">{num(next.time)}</span> | {L(next.note)}
                </p>

                <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-3">
                  <Unit value={countdown.days} label={c.liveDay} />
                  <Unit value={countdown.hours} label={c.liveHour} />
                  <Unit value={countdown.minutes} label={c.liveMinute} />
                  <Unit value={countdown.seconds} label={c.liveSecond} />
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => addSessionToCalendar(next, c, lang)}
                    className="btn btn-copper"
                  >
                    <Calendar className="h-4 w-4" />
                    {c.liveAddCal}
                  </button>
                  <button type="button" onClick={() => scrollToId("booking")} className="btn btn-outline">
                    {c.liveReserve}
                  </button>
                </div>
              </>
            ) : (
              <p className="mt-6 text-[0.85rem] text-inksoft">{c.liveEmpty}</p>
            )}

            {rest.length > 0 && (
              <>
                <div className="hairline my-6" />
                <p className="text-[0.72rem] font-semibold text-inksoft">{c.liveLater}</p>
                <ul className="mt-3 space-y-2">
                  {rest.map((s) => (
                    <li
                      key={`${s.dayId}-${s.time}-${L(s.label)}`}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-line px-4 py-2.5 text-[0.72rem]"
                    >
                      <span className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-teal" />
                        {L(s.label)}
                      </span>
                      <span className="text-inksoft">
                        {dayLabel(s.dayId)} — <span className="num">{num(s.time)}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={100} className="card p-6">
            <div className="flex items-center justify-between gap-3">
              <span className="chip text-inksoft">
                <Target className="h-3.5 w-3.5 text-copper" />
                {c.liveExamChip}
              </span>
              <span className="num text-[0.66rem] text-inksoft">
                {fill(c.liveExamLeft, { d: num(exam.days) })}
              </span>
            </div>

            <p className="num mt-5 text-2xl font-bold">
              {exam.done ? c.liveExamDone : `${fill(c.liveExamWhen, { d: num(exam.days), h: num(exam.hours) })}`}
            </p>
            <p className="mt-1.5 text-[0.72rem] text-inksoft">
              {date(examDate)} — {c.liveExamTime}
            </p>

            <div className="mt-6">
              <div className="flex items-center justify-between text-[0.66rem] text-inksoft">
                <span>{c.liveTerm}</span>
                <span className="num">{fill(c.liveProgress, { p: numInt(Math.round(progress)) })}</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface2">
                <div
                  className={cn("h-full rounded-full bg-gradient-to-l from-copper to-ink transition-[width] duration-700")}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <p className="mt-5 rounded-2xl border border-line bg-surface2/50 p-4 text-[0.72rem] leading-6 text-inksoft">
              {c.liveGoalText}
            </p>
          </Reveal>

          <Reveal delay={160} className="card flex items-center justify-between gap-4 p-6">
            <div>
              <p className="text-[0.8rem] font-bold">{c.livePlanQ}</p>
              <p className="mt-1 text-[0.7rem] text-inksoft">{L(contact.hours)}</p>
            </div>
            <button type="button" onClick={() => scrollToId("contact")} className="btn btn-primary shrink-0">
              {c.livePlanBtn}
            </button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
